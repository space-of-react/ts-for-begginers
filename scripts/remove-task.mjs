/**
 * Удаляет задание с номером NN (проблему, решение и тест) и сдвигает
 * нумерацию всех последующих заданий на единицу вниз.
 *
 * Запуск:
 *   node scripts/remove-task.mjs 09
 *   node scripts/remove-task.mjs 09 --dry   // только показать план, ничего не менять
 *
 * Что делает:
 *   1. Удаляет src/NN-*.проблема.* и src/NN-*.решение.*
 *   2. Удаляет tests/NN.test.ts (и сгенерированный tests/NN.solution.test.ts)
 *   3. Переименовывает файлы заданий > NN: номер уменьшается на 1
 *      (слаг и расширение сохраняются)
 *   4. В тестах правит импорты «../src/NN-…» и заголовок describe('NN — …')
 *   5. Сносит все сгенерированные *.solution.test.ts — их пересоздаст
 *      npm run play:generate
 *
 * После этого нужно запустить: npm run play:generate
 * (он перегенерит task:NN / solution-NN в package.json и solution-тесты).
 */
import { promises as fs } from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const TESTS_DIR = path.join(PROJECT_ROOT, 'tests');

const TASK_FILE_RE = /^(\d{2,})-(.+)\.(проблема|решение)\.(jsx|tsx|html|js|ts)$/i;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry');
const rawNumber = args.find((a) => !a.startsWith('--'));

if (!rawNumber || !/^\d+$/.test(rawNumber)) {
  console.error('Укажи номер задания: node scripts/remove-task.mjs 09 [--dry]');
  process.exit(1);
}

const targetNum = Number(rawNumber);

/** Номер → строка с той же шириной, что и в именах файлов (09, 10, …). */
function pad(num, width = 2) {
  return String(num).padStart(width, '0');
}

const actions = [];

async function rm(file) {
  actions.push(`удалить   ${path.relative(PROJECT_ROOT, file)}`);
  if (!dryRun) await fs.rm(file, { force: true });
}

async function mv(from, to) {
  actions.push(
    `переимен. ${path.relative(PROJECT_ROOT, from)} → ${path.basename(to)}`,
  );
  if (!dryRun) await fs.rename(from, to);
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const srcEntries = await fs.readdir(SRC_DIR);
  const testEntries = (await exists(TESTS_DIR)) ? await fs.readdir(TESTS_DIR) : [];

  const srcTasks = srcEntries
    .map((name) => {
      const m = name.match(TASK_FILE_RE);
      return m ? { name, num: Number(m[1]), width: m[1].length, rest: name.slice(m[1].length) } : null;
    })
    .filter(Boolean);

  if (!srcTasks.some((f) => f.num === targetNum)) {
    console.error(`Задание ${pad(targetNum)} в src не найдено — нечего удалять.`);
    process.exit(1);
  }

  // 1. Удаляем проблему и решение целевого задания
  for (const f of srcTasks.filter((f) => f.num === targetNum)) {
    await rm(path.join(SRC_DIR, f.name));
  }

  // 2. Удаляем его тест (и его solution-копию, если осталась)
  for (const t of testEntries) {
    if (new RegExp(`^${pad(targetNum)}(\\.solution)?\\.test\\.ts$`, 'i').test(t)) {
      await rm(path.join(TESTS_DIR, t));
    }
  }

  // 3. Сдвигаем нумерацию: старый номер → новый. Идём по возрастанию,
  //    чтобы освободившийся номер занимался раньше, чем понадобится следующему.
  const shifted = srcTasks.filter((f) => f.num > targetNum).sort((a, b) => a.num - b.num);
  const renumber = new Map(); // старый номер → новый
  for (const f of shifted) {
    const newNum = f.num - 1;
    renumber.set(f.num, newNum);
    await mv(path.join(SRC_DIR, f.name), path.join(SRC_DIR, pad(newNum, f.width) + f.rest));
  }

  // 4. Тесты: сначала переименовываем файлы, потом правим содержимое
  const problemTests = testEntries
    .filter((t) => /^(\d{2,})\.test\.ts$/i.test(t))
    .map((t) => ({ name: t, num: Number(t.split('.')[0]), width: t.split('.')[0].length }))
    .filter((t) => t.num > targetNum)
    .sort((a, b) => a.num - b.num);

  for (const t of problemTests) {
    const newNum = t.num - 1;
    await mv(
      path.join(TESTS_DIR, t.name),
      path.join(TESTS_DIR, `${pad(newNum, t.width)}.test.ts`),
    );
  }

  // Сгенерированные solution-тесты выкидываем целиком: play:generate создаст заново
  for (const t of testEntries) {
    if (/\.solution\.test\.ts$/i.test(t) && (await exists(path.join(TESTS_DIR, t)))) {
      await rm(path.join(TESTS_DIR, t));
    }
  }

  // 5. Правим содержимое тестов: импорты «../src/NN-…» и заголовок describe('NN — …')
  const finalTests = dryRun
    ? testEntries.filter((t) => /^(\d{2,})\.test\.ts$/i.test(t) && Number(t.split('.')[0]) !== targetNum)
    : (await fs.readdir(TESTS_DIR)).filter((t) => /^(\d{2,})\.test\.ts$/i.test(t));

  for (const t of finalTests) {
    const file = path.join(TESTS_DIR, t);
    if (!(await exists(file))) continue;
    const before = await fs.readFile(file, 'utf8');

    const after = before
      // пути к файлам задания: ../src/10-extends-… → ../src/09-extends-…
      .replace(/(src\/)(\d{2,})(-)/g, (whole, p1, num, p3) => {
        const next = renumber.get(Number(num));
        return next === undefined ? whole : `${p1}${pad(next, num.length)}${p3}`;
      })
      // заголовок теста: describe('10 — …') → describe('09 — …')
      .replace(/(['"`])(\d{2,})(\s+—)/g, (whole, quote, num, tail) => {
        const next = renumber.get(Number(num));
        return next === undefined ? whole : `${quote}${pad(next, num.length)}${tail}`;
      });

    if (after !== before) {
      actions.push(`правка    tests/${t}`);
      if (!dryRun) await fs.writeFile(file, after, 'utf8');
    }
  }

  console.log(actions.join('\n'));
  console.log(
    `\n${dryRun ? '[dry-run] ' : ''}Удалено задание ${pad(targetNum)}, ` +
      `сдвинуто заданий: ${renumber.size}.`,
  );
  if (!dryRun) console.log('Теперь запусти: npm run play:generate');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

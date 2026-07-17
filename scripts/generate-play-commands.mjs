import { promises as fs } from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'src');

/**
 * Recursively collect files under a directory
 */
async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function buildScriptName(relativeFile) {
  const relDir = path.dirname(relativeFile);
  const base = path.basename(relativeFile);
  
  // Извлекаем номер из первой папки (например, "13" из "13-передача-данных-с-context")
  const dirParts = toPosix(relDir).split('/').filter(Boolean);
  // Игнорируем "." если файл в корне src
  const validDirParts = dirParts.filter(p => p !== '.');
  const firstDirMatch = validDirParts[0]?.match(/^(\d{2,})-/);
  const folderNum = firstDirMatch ? firstDirMatch[1] : null;
  
  // Извлекаем номер из имени файла (например, "06" из "06-глобальное-состояние.решение.jsx")
  const fileNumMatch = base.match(/^(\d{2,})-/);
  const fileNum = fileNumMatch ? fileNumMatch[1] : null;
  
  // Определяем, это проблема или решение
  const isSolution = base.includes('.решение.');
  const isProblem = base.includes('.проблема.');
  
  // Формируем имя скрипта
  if (fileNum) {
    if (folderNum) {
      // Файл в папке: task:XX-YY или solution-XX-YY
      if (isProblem) {
        return `task:${folderNum}-${fileNum}`;
      } else if (isSolution) {
        return `solution-${folderNum}-${fileNum}`;
      }
    } else {
      // Файл без папки: task:XX или solution-XX (используем только номер файла)
      if (isProblem) {
        return `task:${fileNum}`;
      } else if (isSolution) {
        return `solution-${fileNum}`;
      }
    }
  }
  
  // Fallback на старое имя, если не удалось извлечь номера
  const dirPart = validDirParts.join(':');
  const prefix = dirPart ? `${dirPart}:` : '';
  return `play:@src:${prefix}${base}`;
}

function buildCommand(relativeFile) {
  const ext = path.extname(relativeFile).toLowerCase();
  const posixPath = toPosix(path.join('src', relativeFile));
  // Передаём путь через переменную окружения VITE_ENTRY
  if (ext === '.html') {
    // Для html хотим открыть сам файл, runner не нужен
    return `cross-env VITE_ENTRY=${posixPath} vite`;
  }
  // jsx/tsx/js/ts — runner прочитает VITE_ENTRY и импортнёт модуль
  return `cross-env VITE_ENTRY=${posixPath} vite`;
}

function isTaskFile(filePath) {
  const base = path.basename(filePath);
  // Match: NN-имя.(проблема|решение).(jsx|tsx|html|js|ts)
  return /^(\d{2,})-.+\.(проблема|решение)\.(jsx|tsx|html|js|ts)$/i.test(base);
}

const SOLUTION_TEST_HEADER =
  '// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.\n' +
  '// Это копия соседнего теста задания с импортом решения вместо проблемы.\n' +
  '// Правь исходный tests/NN.test.ts и запусти: npm run play:generate\n\n';

/**
 * Из каждого tests/NN.test.ts делает tests/NN.solution.test.ts,
 * заменяя в путях «.проблема» на «.решение», чтобы solution-NN
 * прогонял те же проверки против файла решения.
 * Возвращает список исходных (problem) тест-файлов.
 */
async function generateSolutionTests() {
  const testsDir = path.join(PROJECT_ROOT, 'tests');
  let entries = [];
  try {
    entries = await fs.readdir(testsDir);
  } catch {
    return []; // папки tests ещё нет
  }

  // Сносим старые сгенерированные solution-тесты (чтобы не оставались «сироты»)
  for (const f of entries) {
    if (/\.solution\.test\.ts$/i.test(f)) {
      await fs.rm(path.join(testsDir, f));
    }
  }

  // Исходные тесты задания: NN.test.ts (только цифры/дефис перед .test.ts)
  const problemTests = entries.filter((f) => /^[\d-]+\.test\.ts$/.test(f));
  for (const tf of problemTests) {
    const content = await fs.readFile(path.join(testsDir, tf), 'utf8');
    const solContent = SOLUTION_TEST_HEADER + content.split('.проблема').join('.решение');
    const solName = tf.replace(/\.test\.ts$/, '.solution.test.ts');
    await fs.writeFile(path.join(testsDir, solName), solContent, 'utf8');
  }

  return problemTests;
}

async function main() {
  try {
    await fs.access(SRC_DIR);
  } catch {
    console.error('Папка src не найдена');
    process.exit(1);
  }

  const allFiles = await collectFiles(SRC_DIR);
  const taskFiles = allFiles
    .filter(isTaskFile)
    .map((abs) => path.relative(SRC_DIR, abs));

  const pkgPath = path.join(PROJECT_ROOT, 'package.json');
  const pkgRaw = await fs.readFile(pkgPath, 'utf8');
  const pkg = JSON.parse(pkgRaw);
  pkg.scripts = pkg.scripts || {};

  // Remove old play:@src:* entries and old task:/solution-/test entries
  for (const key of Object.keys(pkg.scripts)) {
    if (
      key.startsWith('play:@src:') ||
      key.startsWith('task:') ||
      key.startsWith('solution-') ||
      key === 'test' ||
      key === 'test:watch' ||
      /^test:\d/.test(key)
    ) {
      delete pkg.scripts[key];
    }
  }

  // Ensure base scripts
  if (!pkg.scripts.dev) pkg.scripts.dev = 'vite';
  pkg.scripts['play:generate'] = 'node scripts/generate-play-commands.mjs';

  // Автогенерация solution-вариантов тестов.
  // Автор пишет ОДИН файл tests/NN.test.ts (импортит «.проблема»).
  // Отсюда создаём tests/NN.solution.test.ts с подменой «.проблема» → «.решение»,
  // чтобы solution-NN прогонял те же проверки против решения.
  const problemTestFiles = await generateSolutionTests();

  const has = async (file) => {
    try {
      await fs.access(path.join(PROJECT_ROOT, file));
      return true;
    } catch {
      return false;
    }
  };

  for (const rel of taskFiles) {
    const name = buildScriptName(rel);
    let cmd = buildCommand(rel);

    // Одна команда на задание. task:NN и solution-NN открывают UI-дашборд в браузере
    // (@vitest/ui) и одновременно печатают результат в терминал — список проверок
    // с ✓/× по-русски, обновляется при сохранении.
    // Если файла теста ещё нет — падаем обратно на браузерное превью (vite).
    if (name.startsWith('task:')) {
      const suffix = name.slice('task:'.length); // напр. "01" или "03-02"
      const testFile = `tests/${suffix}.test.ts`;
      if (await has(testFile)) cmd = `vitest --ui ${testFile}`;
    } else if (name.startsWith('solution-')) {
      const suffix = name.slice('solution-'.length);
      const solTest = `tests/${suffix}.solution.test.ts`;
      if (await has(solTest)) cmd = `vitest --ui ${solTest}`;
    }

    pkg.scripts[name] = cmd;
  }

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Сгенерировано скриптов: ${taskFiles.length}`);
  console.log(`Solution-тестов сгенерировано: ${problemTestFiles.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
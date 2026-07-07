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

  // Remove old play:@src:* entries and old task:/solution- entries
  for (const key of Object.keys(pkg.scripts)) {
    if (key.startsWith('play:@src:') || key.startsWith('task:') || key.startsWith('solution-')) {
      delete pkg.scripts[key];
    }
  }

  // Ensure base scripts
  if (!pkg.scripts.dev) pkg.scripts.dev = 'vite';
  pkg.scripts['play:generate'] = 'node scripts/generate-play-commands.mjs';

  for (const rel of taskFiles) {
    const name = buildScriptName(rel);
    const cmd = buildCommand(rel);
    pkg.scripts[name] = cmd;
  }

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Сгенерировано скриптов: ${taskFiles.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
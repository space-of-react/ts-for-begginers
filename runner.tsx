import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

function getEntryFromEnvOrUrl(): string | null {
  const fromEnv = (import.meta as any).env?.VITE_ENTRY as string | undefined;
  if (fromEnv && typeof fromEnv === 'string') return fromEnv;
  const url = new URL(window.location.href);
  return url.searchParams.get('f');
}

function normalizeToVitePath(entry: string): string {
  let normalized = entry.replace(/\\/g, '/');
  if (normalized.startsWith('./')) normalized = normalized.slice(2);
  if (!normalized.startsWith('/')) normalized = '/' + normalized;
  return normalized;
}

function showInfo(message: string) {
  const el = document.getElementById('root');
  if (el) {
    el.innerHTML =
      '<div style="font-family: ui-monospace, monospace; padding: 24px; line-height: 1.6;">' +
      message +
      '</div>';
  }
}

async function run() {
  if (!(window as any).React) (window as any).React = React;
  if (!(window as any).ReactDOM) (window as any).ReactDOM = ReactDOM;

  const entry = getEntryFromEnvOrUrl();
  if (!entry) {
    showInfo(
      'Не указан <code>VITE_ENTRY</code> или параметр <code>?f=...</code>.<br/>' +
        'Запусти задачу: <code>npm run task:01-01</code>'
    );
    return;
  }

  const path = normalizeToVitePath(entry);
  try {
    if (path.toLowerCase().endsWith('.html')) {
      window.location.replace(path);
      return;
    }

    const module = await import(/* @vite-ignore */ path);

    if (module.default) {
      const el = document.getElementById('root');
      if (el) {
        const root = ReactDOM.createRoot(el);
        root.render(React.createElement(module.default));
      }
    } else {
      // .ts-задачи без default-экспорта — открой файл в редакторе.
      // Здесь просто подсказываем юзеру, где смотреть.
      showInfo(
        'Файл загружен: <code>' +
          path +
          '</code><br/>' +
          'В этой задаче нет визуального компонента — открой файл в редакторе и работай с типами.<br/>' +
          'Ошибки TypeScript подсветятся в твоей IDE или прямо в Sandpack.'
      );
    }
  } catch (error) {
    const stack = (error as Error)?.stack ?? String(error);
    showInfo(
      'Ошибка импорта: <code>' +
        path +
        '</code><pre style="white-space:pre-wrap; margin-top: 12px;">' +
        stack +
        '</pre>'
    );
    console.error(error);
  }
}

run();

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect } from 'vitest';
import { handle } from '../src/24-дискриминированный-union.решение';

describe('24 — дискриминированный union', () => {
  test('для success возвращает data', () => {
    expect(handle({ status: 'success', data: 'ok' })).toBe('ok');
  });

  test('для error возвращает message', () => {
    expect(handle({ status: 'error', message: 'что-то сломалось' })).toBe(
      'что-то сломалось',
    );
  });
});

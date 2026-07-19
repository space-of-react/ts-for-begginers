// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect } from 'vitest';
import { handle } from '../src/24-дискриминированный-union.решение';

describe('24 — дискриминированное объединение (discriminated union)', () => {
  test('результат со статусом success возвращает данные', () => {
    expect(handle({ status: 'success', data: 'ok' })).toBe('ok');
  });

  test('результат со статусом error возвращает сообщение', () => {
    expect(handle({ status: 'error', message: 'что-то сломалось' })).toBe(
      'что-то сломалось',
    );
  });
});

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect } from 'vitest';
import { formatId } from '../src/21-typeof-guard.решение';

describe('21 — сужение типа через typeof', () => {
  test('строковый id приводится к верхнему регистру', () => {
    expect(formatId('abc-123')).toBe('ABC-123');
  });

  test('числовой id преобразуется в строку', () => {
    expect(formatId(42)).toBe('42');
  });
});

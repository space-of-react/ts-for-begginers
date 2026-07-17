// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect } from 'vitest';
import { formatId } from '../src/22-typeof-guard.решение';

describe('22 — typeof guard', () => {
  test('строку приводит к верхнему регистру', () => {
    expect(formatId('abc-123')).toBe('ABC-123');
  });

  test('число превращает в строку (не падает на .toUpperCase)', () => {
    expect(formatId(42)).toBe('42');
  });
});

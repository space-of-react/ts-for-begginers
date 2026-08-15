// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { greet } from '../src/15-опциональный-параметр.решение';

describe('15 — параметр со значением по умолчанию', () => {
  test('greet можно вызвать без аргументов', () => {
    expectTypeOf(greet).toBeCallableWith();
  });

  test('greet() без аргументов возвращает "Привет, гость"', () => {
    expect(greet()).toBe('Привет, гость');
  });
});

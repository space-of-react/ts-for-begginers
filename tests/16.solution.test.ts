// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { greet } from '../src/16-опциональный-параметр.решение';

describe('16 — опциональный параметр (значение по умолчанию)', () => {
  test('greet можно вызвать без аргумента', () => {
    expectTypeOf(greet).toBeCallableWith();
  });

  test('greet() без аргумента возвращает приветствие гостю', () => {
    expect(greet()).toBe('Привет, гость');
  });
});

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import { greet } from '../src/13-параметры-функции.решение';

describe('13 — параметры функции', () => {
  test('параметр name должен быть string (а не неявный any)', () => {
    expectTypeOf(greet).parameter(0).toEqualTypeOf<string>();
  });
});

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import { greet } from '../src/12-параметры-функции.решение';

describe('12 — типизация параметров функции', () => {
  test('Параметр функции greet имеет тип string', () => {
    expectTypeOf(greet).parameter(0).toEqualTypeOf<string>();
  });
});

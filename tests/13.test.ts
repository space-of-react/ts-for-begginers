import { describe, test, expectTypeOf } from 'vitest';
import { greet } from '../src/13-параметры-функции.проблема';

describe('13 — типизация параметров функции', () => {
  test('Параметр функции greet имеет тип string', () => {
    expectTypeOf(greet).parameter(0).toEqualTypeOf<string>();
  });
});

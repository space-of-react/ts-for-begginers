import { describe, test, expectTypeOf } from 'vitest';
import { greet } from '../src/13-параметры-функции.проблема';

describe('13 — параметры функции', () => {
  test('параметр name должен быть string (а не неявный any)', () => {
    expectTypeOf(greet).parameter(0).toEqualTypeOf<string>();
  });
});

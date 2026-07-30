import { describe, test, expectTypeOf } from 'vitest';
import type { Id } from '../src/08-union-с-примитивами.проблема';

describe('08 — объединение примитивов (union)', () => {
  test('Id может быть строкой или числом (string | number)', () => {
    expectTypeOf<Id>().toEqualTypeOf<string | number>();
  });
});

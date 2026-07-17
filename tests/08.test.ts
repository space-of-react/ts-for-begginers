import { describe, test, expectTypeOf } from 'vitest';
import type { Id } from '../src/08-union-с-примитивами.проблема';

describe('08 — union с примитивами', () => {
  test('тип Id должен быть string | number', () => {
    expectTypeOf<Id>().toEqualTypeOf<string | number>();
  });
});

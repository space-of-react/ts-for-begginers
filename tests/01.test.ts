import { describe, test, expectTypeOf } from 'vitest';
import type { Name } from '../src/01-простой-type-alias.проблема';

describe('01 — псевдоним типа (type alias)', () => {
  test('Name — это псевдоним для string', () => {
    expectTypeOf<Name>().toEqualTypeOf<string>();
  });
});

import { describe, test, expectTypeOf } from 'vitest';
import type { Name } from '../src/01-простой-type-alias.проблема';

describe('01 — простой type alias', () => {
  test('тип Name должен быть string (а не any)', () => {
    expectTypeOf<Name>().toEqualTypeOf<string>();
  });
});

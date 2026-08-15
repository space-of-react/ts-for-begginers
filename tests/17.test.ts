import { describe, test, expectTypeOf } from 'vitest';
import type { UserPatch } from '../src/17-partial.проблема';

describe('17 — утилита Partial', () => {
  test('UserPatch делает все поля User опциональными', () => {
    expectTypeOf<UserPatch>().toEqualTypeOf<{ name?: string; email?: string }>();
  });
});

import { describe, test, expectTypeOf } from 'vitest';
import type { UserPatch } from '../src/18-partial.проблема';

describe('18 — Partial', () => {
  test('UserPatch = Partial<User>: все поля опциональны', () => {
    expectTypeOf<UserPatch>().toEqualTypeOf<{ name?: string; email?: string }>();
  });
});

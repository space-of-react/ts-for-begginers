import { describe, test, expectTypeOf } from 'vitest';
import type { PublicUser } from '../src/20-omit.проблема';

describe('20 — Omit', () => {
  test('PublicUser = Omit<User, "email"> → { name: string; age: number }', () => {
    expectTypeOf<PublicUser>().toEqualTypeOf<{ name: string; age: number }>();
  });
});

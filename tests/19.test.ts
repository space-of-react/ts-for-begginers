import { describe, test, expectTypeOf } from 'vitest';
import type { UserPreview } from '../src/19-pick.проблема';

describe('19 — Pick', () => {
  test('UserPreview = Pick<User, "name"> → { name: string }', () => {
    expectTypeOf<UserPreview>().toEqualTypeOf<{ name: string }>();
  });
});

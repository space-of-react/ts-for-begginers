import { describe, test, expectTypeOf } from 'vitest';
import type { UserPreview } from '../src/18-pick.проблема';

describe('18 — утилита Pick', () => {
  test('UserPreview выбирает из User только поле name', () => {
    expectTypeOf<UserPreview>().toEqualTypeOf<{ name: string }>();
  });
});

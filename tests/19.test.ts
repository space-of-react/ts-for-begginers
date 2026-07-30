import { describe, test, expectTypeOf } from 'vitest';
import type { UserPreview } from '../src/19-pick.проблема';

describe('19 — утилита Pick', () => {
  test('UserPreview выбирает из User только поле name', () => {
    expectTypeOf<UserPreview>().toEqualTypeOf<{ name: string }>();
  });
});

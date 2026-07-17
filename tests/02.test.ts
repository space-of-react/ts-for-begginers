import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/02-объект-с-одним-полем.проблема';

describe('02 — объект с одним полем', () => {
  test('тип User должен быть { name: string }', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string }>();
  });
});

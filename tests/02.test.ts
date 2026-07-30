import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/02-объект-с-одним-полем.проблема';

describe('02 — объектный тип с одним полем', () => {
  test('User описывает объект с полем name: string', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string }>();
  });
});

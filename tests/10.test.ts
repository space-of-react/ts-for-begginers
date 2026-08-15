import { describe, test, expectTypeOf } from 'vitest';
import type { AdminUser } from '../src/10-пересечение-через-amp.проблема';

describe('10 — пересечение типов (&)', () => {
  test('AdminUser — пересечение User и { role: string }', () => {
    expectTypeOf<AdminUser>().toEqualTypeOf<{ name: string } & { role: string }>();
  });
});

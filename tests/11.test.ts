import { describe, test, expectTypeOf } from 'vitest';
import type { AdminUser } from '../src/11-пересечение-через-amp.проблема';

describe('11 — пересечение типов (&)', () => {
  test('AdminUser — пересечение User и { role: string }', () => {
    expectTypeOf<AdminUser>().toEqualTypeOf<{ name: string } & { role: string }>();
  });
});

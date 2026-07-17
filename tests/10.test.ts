import { describe, test, expectTypeOf } from 'vitest';
import type { Admin } from '../src/10-extends-в-interface.проблема';

describe('10 — extends в interface', () => {
  test('Admin должен наследовать name у User: { name: string; role: string }', () => {
    expectTypeOf<Admin>().toEqualTypeOf<{ name: string; role: string }>();
  });
});

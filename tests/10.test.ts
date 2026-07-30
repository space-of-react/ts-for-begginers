import { describe, test, expectTypeOf } from 'vitest';
import type { Admin } from '../src/10-extends-в-interface.проблема';

describe('10 — наследование интерфейсов (extends)', () => {
  test('Admin наследует поля User и добавляет role', () => {
    expectTypeOf<Admin>().toEqualTypeOf<{ name: string; role: string }>();
  });
});

import { describe, test, expectTypeOf } from 'vitest';
import type { Status } from '../src/12-type-vs-interface.проблема';

describe('12 — type или interface', () => {
  test('Status допускает значения "idle" | "loading" | "success"', () => {
    expectTypeOf<Status>().toEqualTypeOf<'idle' | 'loading' | 'success'>();
  });
});

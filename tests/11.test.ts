import { describe, test, expectTypeOf } from 'vitest';
import type { Status } from '../src/11-type-vs-interface.проблема';

describe('11 — type или interface', () => {
  test('Status допускает значения "idle" | "loading" | "success"', () => {
    expectTypeOf<Status>().toEqualTypeOf<'idle' | 'loading' | 'success'>();
  });
});

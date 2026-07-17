import { describe, test, expectTypeOf } from 'vitest';
import type { Scores } from '../src/21-record.проблема';

describe('21 — Record', () => {
  test('Scores = Record<string, number>', () => {
    expectTypeOf<Scores>().toEqualTypeOf<Record<string, number>>();
  });
});

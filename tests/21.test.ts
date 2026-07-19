import { describe, test, expectTypeOf } from 'vitest';
import type { Scores } from '../src/21-record.проблема';

describe('21 — утилита Record', () => {
  test('Scores — словарь Record<string, number>', () => {
    expectTypeOf<Scores>().toEqualTypeOf<Record<string, number>>();
  });
});

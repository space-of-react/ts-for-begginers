import { describe, test, expectTypeOf } from 'vitest';
import type { Scores } from '../src/20-record.проблема';

describe('20 — утилита Record', () => {
  test('Scores — словарь Record<string, number>', () => {
    expectTypeOf<Scores>().toEqualTypeOf<Record<string, number>>();
  });
});

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Scores } from '../src/20-record.решение';

describe('20 — утилита Record', () => {
  test('Scores — словарь Record<string, number>', () => {
    expectTypeOf<Scores>().toEqualTypeOf<Record<string, number>>();
  });
});

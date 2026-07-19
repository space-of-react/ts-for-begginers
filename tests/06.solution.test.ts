// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Theme } from '../src/06-литеральный-тип.решение';

describe('06 — литеральный тип', () => {
  test('Theme допускает единственное значение "light"', () => {
    expectTypeOf<Theme>().toEqualTypeOf<'light'>();
  });
});

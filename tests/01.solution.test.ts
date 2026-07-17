// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Name } from '../src/01-простой-type-alias.решение';

describe('01 — простой type alias', () => {
  test('тип Name должен быть string (а не any)', () => {
    expectTypeOf<Name>().toEqualTypeOf<string>();
  });
});

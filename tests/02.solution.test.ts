// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { User } from '../src/02-объект-с-одним-полем.решение';

describe('02 — объект с одним полем', () => {
  test('тип User должен быть { name: string }', () => {
    expectTypeOf<User>().toEqualTypeOf<{ name: string }>();
  });
});

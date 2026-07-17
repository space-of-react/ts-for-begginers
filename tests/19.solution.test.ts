// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { UserPreview } from '../src/19-pick.решение';

describe('19 — Pick', () => {
  test('UserPreview = Pick<User, "name"> → { name: string }', () => {
    expectTypeOf<UserPreview>().toEqualTypeOf<{ name: string }>();
  });
});

// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { PublicUser } from '../src/20-omit.решение';

describe('20 — утилита Omit', () => {
  test('PublicUser — это User без поля email', () => {
    expectTypeOf<PublicUser>().toEqualTypeOf<{ name: string; age: number }>();
  });
});

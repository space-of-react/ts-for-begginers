// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Status } from '../src/12-type-vs-interface.решение';

describe('12 — type vs interface', () => {
  test('Status должен быть "idle" | "loading" | "success"', () => {
    expectTypeOf<Status>().toEqualTypeOf<'idle' | 'loading' | 'success'>();
  });
});

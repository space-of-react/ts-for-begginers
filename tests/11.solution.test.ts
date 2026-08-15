// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Status } from '../src/11-type-vs-interface.решение';

describe('11 — type или interface', () => {
  test('Status допускает значения "idle" | "loading" | "success"', () => {
    expectTypeOf<Status>().toEqualTypeOf<'idle' | 'loading' | 'success'>();
  });
});

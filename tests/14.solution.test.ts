// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expectTypeOf } from 'vitest';
import type { Logger } from '../src/14-void.решение';

describe('14 — тип void', () => {
  test('Logger — функция, ничего не возвращающая ((message: string) => void)', () => {
    expectTypeOf<Logger>().toEqualTypeOf<(message: string) => void>();
  });
});

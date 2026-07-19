import { describe, test, expectTypeOf } from 'vitest';
import type { Logger } from '../src/15-void.проблема';

describe('15 — тип void', () => {
  test('Logger — функция, ничего не возвращающая ((message: string) => void)', () => {
    expectTypeOf<Logger>().toEqualTypeOf<(message: string) => void>();
  });
});

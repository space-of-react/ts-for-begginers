import { describe, test, expectTypeOf } from 'vitest';
import type { Logger } from '../src/14-void.проблема';

describe('14 — тип void', () => {
  test('Logger — функция, ничего не возвращающая ((message: string) => void)', () => {
    expectTypeOf<Logger>().toEqualTypeOf<(message: string) => void>();
  });
});

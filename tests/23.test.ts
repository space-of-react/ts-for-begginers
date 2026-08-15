import { describe, test, expect } from 'vitest';
import { handle } from '../src/23-дискриминированный-union.проблема';

describe('23 — дискриминированное объединение (discriminated union)', () => {
  test('результат со статусом success возвращает данные', () => {
    expect(handle({ status: 'success', data: 'ok' })).toBe('ok');
  });

  test('результат со статусом error возвращает сообщение', () => {
    expect(handle({ status: 'error', message: 'что-то сломалось' })).toBe(
      'что-то сломалось',
    );
  });
});

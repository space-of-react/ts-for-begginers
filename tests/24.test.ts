import { describe, test, expect } from 'vitest';
import { handle } from '../src/24-дискриминированный-union.проблема';

describe('24 — дискриминированный union', () => {
  test('для success возвращает data', () => {
    expect(handle({ status: 'success', data: 'ok' })).toBe('ok');
  });

  test('для error возвращает message', () => {
    expect(handle({ status: 'error', message: 'что-то сломалось' })).toBe(
      'что-то сломалось',
    );
  });
});

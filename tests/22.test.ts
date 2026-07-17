import { describe, test, expect } from 'vitest';
import { formatId } from '../src/22-typeof-guard.проблема';

describe('22 — typeof guard', () => {
  test('строку приводит к верхнему регистру', () => {
    expect(formatId('abc-123')).toBe('ABC-123');
  });

  test('число превращает в строку (не падает на .toUpperCase)', () => {
    expect(formatId(42)).toBe('42');
  });
});

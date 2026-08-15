import { describe, test, expect, vi } from 'vitest';
import { speak } from '../src/22-оператор-in.проблема';

describe('22 — сужение типа через оператор in', () => {
  test('для кота вызывается метод meow()', () => {
    const cat = { meow: vi.fn() };
    speak(cat);
    expect(cat.meow).toHaveBeenCalledTimes(1);
  });

  test('для собаки вызывается метод bark()', () => {
    const dog = { bark: vi.fn() };
    speak(dog);
    expect(dog.bark).toHaveBeenCalledTimes(1);
  });
});

import { describe, test, expect } from 'bun:test';

import rob from './index';

describe('House Robber Tests', () => {

  test('should pass example 1', () => {
    const result = rob([1, 2, 3, 1]);

    expect(result).toBe(4);
  });

  test('should pass example 2', () => {
    const result = rob([2, 7, 9, 3, 1]);

    expect(result).toBe(12);
  });

  test('should pass the base case (< 2 in array of nums)', () => {
    const result = rob([2, 7]);

    expect(result).toBe(7);
  });

});


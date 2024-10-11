import { describe, expect, test } from 'bun:test';

import { max_subarray_sum } from './index';

describe('Max Subarray Sum', () => {

  test('should find the max sum in an array with negative numbers', () => {
    const result = max_subarray_sum([-2,1,-3,4,-1,2,1,-5,4]);

    expect(result).toBe(6);
  });

  test('should find the max sum in an array with one number', () => {
    const result = max_subarray_sum([1]);

    expect(result).toBe(1);
  });

  test('should find the max sum in an array with all positive numbers', () => {
    const result = max_subarray_sum([5,4,1,7,8]);

    expect(result).toBe(25);
  });

});

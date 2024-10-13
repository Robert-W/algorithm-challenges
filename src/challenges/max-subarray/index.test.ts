import { describe, expect, test } from 'bun:test';

import { max_subarray_sum } from './index';
import { max_subarray_sum_ternary } from './bench/use_ternary';

describe('Max Subarray Sum', () => {

  test('should find the max sum in an array with negative numbers', () => {
    expect(
      max_subarray_sum([-2,1,-3,4,-1,2,1,-5,4])
    ).toBe(6);
    expect(
      max_subarray_sum_ternary([-2,1,-3,4,-1,2,1,-5,4])
    ).toBe(6);
  });

  test('should find the max sum in an array with one number', () => {
    expect(max_subarray_sum([1])).toBe(1);
    expect(max_subarray_sum_ternary([1])).toBe(1);
  });

  test('should find the max sum in an array with all positive numbers', () => {
    expect(max_subarray_sum([5,4,1,7,8])).toBe(25);
    expect(max_subarray_sum_ternary([5,4,1,7,8])).toBe(25);
  });

});

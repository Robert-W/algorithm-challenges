import { describe, test, expect } from 'bun:test';

import { recursiveBinarySearch, binarySearch } from './index';

describe('Algorithm: Basic Binary Search on a sorted array of numbers', () => {

  test('should return the index of the found item', () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let recursiveResult = recursiveBinarySearch(5, data);
    let result = binarySearch(data, 5)

    expect(recursiveResult).toEqual(4);
    expect(result).toEqual(4)
  });

  test('should return -1 if it cannot find the item', () => {
    let data = [0, 1, 2, 3, 4, 5, 6];
    let recursiveResult = recursiveBinarySearch(12, data);
    let result = binarySearch(data, 12)

    expect(recursiveResult).toEqual(-1);
    expect(result).toEqual(-1);
  });

});

import { describe, expect, test } from 'bun:test';

import sum_distances from './index';
import single_dfs from './bench/single_dfs';

describe('Leetcode: Sum of Distances in Tree', () => {

  test('should calculate the correct sums for a tree with many edges', () => {
    let edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]];
    let expected = [8, 12, 6, 10, 10, 10];

    expect(sum_distances(expected.length, edges)).toEqual(expected);
    expect(single_dfs(expected.length, edges)).toEqual(expected);
  });

  test('should calculate the correct sums when given an empty tree', () => {
    let edges: number[][] = [];
    let expected = [0];

    expect(sum_distances(expected.length, edges)).toEqual(expected);
    expect(single_dfs(expected.length, edges)).toEqual(expected);
  });

  test('should calculate the correct sums for a tree with only one edge', () => {
    let edges = [[0, 1]];
    let expected = [1, 1];

    expect(sum_distances(expected.length, edges)).toEqual(expected);
    expect(single_dfs(expected.length, edges)).toEqual(expected);
  });

});

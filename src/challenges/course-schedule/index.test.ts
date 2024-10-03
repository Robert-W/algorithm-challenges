import { describe, expect, test } from 'bun:test';

import can_finish from './index';

describe('Leetcode: Course Schedule Challenge', () => {

  test('should return true for the following course schedules', () => {

    expect(can_finish(2, [[1, 0]])).toBeTruthy();
    expect(can_finish(3, [[0, 1], [0, 2], [1, 2]])).toBeTruthy();

  });

  test('should return false for the following course schedules', () => {

    expect(can_finish(2, [[1, 0], [0, 1]])).toBeFalsy();
    expect(can_finish(3, [[1, 0], [0, 2], [2, 1]])).toBeFalsy();

  });

});

import { describe, expect, test } from 'bun:test';

import read_binary_watch from './index';

describe('Leetcode: Read Binary Watch', () => {

  test('should return 10 times for a single bit', () => {
    let result = read_binary_watch(1);

    expect(result).toHaveLength(10);
    expect(result).toEqual(
      ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00']
    );
  });

  test('should return only one possible time for no bit turned on', () => {
    let result = read_binary_watch(0);

    expect(result).toHaveLength(1);
    expect(result).toEqual(
      ['0:00']
    );
  });

  test('should return no valid times for a nine bits', () => {
    let result = read_binary_watch(9);

    expect(result).toHaveLength(0);
  });

});



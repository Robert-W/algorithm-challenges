import { describe, expect, test } from 'bun:test';

import find_words from './index';

describe('Leetcode: Word Search 2', () => {

  test('should find all words in the given matrix', () => {
    let board = [['o', 'a', 'a', 'n'],['e', 't', 'a', 'e'],['i', 'h', 'k', 'r'],['i', 'f', 'l', 'v']];
    let words = ['oath', 'pea', 'eat', 'rain'];
    let expected = ['eat', 'oath'];

    expect(find_words(board, words).sort()).toEqual(expected.sort());
  });

  test('should return an empty array if no words are present in the matrix', () => {
    let board = [['a', 'b'], ['c', 'd']];
    let words = ['abcb', 'abba'];
    let expected: string[] = [];

    expect(find_words(board, words).sort()).toEqual(expected.sort());
  });

});

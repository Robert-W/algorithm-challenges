import { test, expect, describe } from 'bun:test';

import PrefixTrie from './index';

describe('Prefix Trie Tests', () => {

  test('should be able to add words', function() {
    const trie = new PrefixTrie();

    trie.add_word('fudge');
    trie.add_word('fubar');

    let node = trie.get('f')!.get('u')!;
    expect(Object.keys(node.children)).toHaveLength(2);

    let fudge = node.get('d')!.get('g')!.get('e')!;
    expect(fudge.word).toBe('fudge');

    let fubar = node.get('b')!.get('a')!.get('r')!;
    expect(fubar.word).toBe('fubar');
  });

  test('should be able to safely remove related words', function() {
    const trie = new PrefixTrie();

    trie.add_word('start');
    trie.add_word('status');
    trie.remove_word('status');

    // Check for the presence of a t child on the a node
    // We should have these paths after adding the words
    // s - t - a - r - t
    //           - t - u - s
    // After deleting status, a should have one child which is r
    // the remaining t - u - s branch should be deleted
    let node = trie
      .get('s')!
      .get('t')!
      .get('a')!;

    expect(node.get('r')).toBeInstanceOf(PrefixTrie);
    expect(node.get('t')).toBeUndefined();
  });

  test('should correctly remove a word that is a prefix of another word', function() {
    const trie = new PrefixTrie();

    trie.add_word('stat');
    trie.add_word('status');
    trie.remove_word('stat');

    // Check for the presence of the marker on the correct node
    // If any of these get's fail, then we broke the tree
    let node = trie
      .get('s')!
      .get('t')!
      .get('a')!
      .get('t')!;

    expect(node.word).toBeUndefined();
  });

  test('should not modify the tree if the word is not present', function() {
    const trie = new PrefixTrie();

    trie.add_word('start');
    trie.remove_word('star');
    trie.remove_word('flash');

    // Traverse the tree to the end, make sure start is still a word
    // in the trie. This should not throw on the way there, if it does
    // something went wrong with the deletion
    const final_node = trie
      .get('s')!
      .get('t')!
      .get('a')!
      .get('r')!
      .get('t')!;

    expect(final_node.word).toBe('start');
  });

});

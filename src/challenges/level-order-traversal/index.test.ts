import { describe, test, expect } from 'bun:test';

import { TreeNode, traverse } from './index';

describe('Binary Tree Level Order Traversal Tests', () => {

  test('should traverse a balanced tree', () => {
    // Create our binary tree nodes
    const root = new TreeNode(3);
    const nine = new TreeNode(9);
    const twenty = new TreeNode(20);
    const six = new TreeNode(6);
    const twelve = new TreeNode(12);
    const fifteen = new TreeNode(15);
    const twenty_two = new TreeNode(22);

    // Assign children
    nine.left = six;
    nine.right = twelve;
    twenty.left = fifteen;
    twenty.right = twenty_two;
    root.left = nine;
    root.right = twenty;

    const result = traverse(root);

    expect(result).toEqual([[3], [9, 20], [6, 12, 15, 22]]);
  });

  test('should omit nulls from the output', () => {
    // Create our binary tree
    const fifteen = new TreeNode(15);
    const twenty_two = new TreeNode(22);
    // Nine has no(null) children
    const nine = new TreeNode(9);
    const twenty = new TreeNode(20, fifteen, twenty_two);
    const root = new TreeNode(3, nine, twenty);

    const result = traverse(root);

    expect(result).toEqual([[3], [9, 20], [15, 22]]);
  });

  test('should handle a single node with no children', () => {
    const root = new TreeNode(5);

    const result = traverse(root);

    expect(result).toEqual([[5]]);
  });

  test('should return an empty array given no root node', () => {
    const result = traverse();

    expect(result).toEqual([]);
  });

});



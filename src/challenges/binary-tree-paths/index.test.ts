import { describe, expect, test } from 'bun:test';

import { binary_tree_path, string_buliding_solution, TreeNode } from './index';

describe('Leetcode: Binary Tree Paths', () => {

  test('should return a simple tree', () => {
    let node = new TreeNode(1);
    let result = binary_tree_path(node);
    let result_two = string_buliding_solution(node);

    expect(result).toEqual(["1"]);
    expect(result_two).toEqual(["1"]);
  });

  test('should return all paths in a small tree', () => {
    let five = new TreeNode(5);
    let three = new TreeNode(3);
    let two = new TreeNode(2, undefined, five);
    let root = new TreeNode(1, two, three);
    let result = binary_tree_path(root);
    let result_two = string_buliding_solution(root);

    expect(result).toEqual(["1->2->5", "1->3"]);
    expect(result_two).toEqual(["1->2->5", "1->3"]);
  });

  test('should return all paths in a balanced tree', () => {
    let eight = new TreeNode(8);
    let six = new TreeNode(6);
    let seven = new TreeNode(7, six, eight);

    let four = new TreeNode(4);
    let two = new TreeNode(2);
    let three = new TreeNode(3, two, four);

    let root = new TreeNode(5, three, seven);
    let result = binary_tree_path(root);
    let result_two = string_buliding_solution(root);

    expect(result).toEqual(["5->3->2", "5->3->4", "5->7->6", "5->7->8"]);
    expect(result_two).toEqual(["5->3->2", "5->3->4", "5->7->6", "5->7->8"]);
  });

});


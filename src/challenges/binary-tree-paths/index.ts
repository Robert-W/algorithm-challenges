/**
 * @Class TreeNode
 * @description Contains a value and possibly a left/right node
 */
export class TreeNode {
  val: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;

  constructor(val?: number | undefined, left?: TreeNode | undefined, right?: TreeNode | undefined) {
    this.val = val ? val : 0;
    this.left = left;
    this.right = right;
  }
}

/**
  * @function binary_tree_path
  * @description Find every available root to leaf path and return in any order
  * @param {TreeNode} root - Root Tree Node
  * @return {string[]}
  */
export function binary_tree_path(root: TreeNode): string[] {
  let results: string[] = [];
  let current_path: number[] = [];

  backtrack(root, results, current_path);

  return results;
}

/**
 * @function backtrack
 * @description Recursive helper to traverse the tree
 * @param {TreeNode} node - Current node we are at
 * @param {string[]} results - Cumulative resulting paths
 * @param {number[]} current_path - values of nodes on the path we are on
 */
function backtrack(node: TreeNode, results: string[], current_path: number[]) {
  if (node.val) {
    current_path.push(node.val);
  }

  if (node.left === undefined && node.right === undefined) {
    results.push(current_path.join('->'));
    current_path.pop();
    return;
  }

  if (node.left) {
    backtrack(node.left, results, current_path);
  }

  if (node.right) {
    backtrack(node.right, results, current_path);
  }

  current_path.pop();
}

/**
 * @function string_building_solution
 * @param {TreeNode} root - Root node for a tree
 * @returns {string[]} - All paths through the tree
 */
export function string_buliding_solution(root: TreeNode): string[] {
  const results: string[] = [];

  function dfs(node: TreeNode, path = "") {
    if (node.left === undefined && node.right === undefined) {
      results.push(path + node.val);
    }

    if (node.left) {
      dfs(node.left, path + node.val + "->");
    }

    if (node.right) {
      dfs(node.right, path + node.val + "->");
    }
  }

  dfs(root);

  return results;
}

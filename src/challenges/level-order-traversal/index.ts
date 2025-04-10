export class TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(value: number = 0, left?: TreeNode, right?: TreeNode) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function traverse(root?: TreeNode): number[][] {
  // base case
  if (root === undefined) return [];

  const queue = [root];
  const result: number[][] = [];

  while (queue.length > 0) {
    const length = queue.length;
    const level: number[] = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift()!;

      level.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

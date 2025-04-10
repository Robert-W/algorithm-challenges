# House Robbers
> https://leetcode.com/problems/binary-tree-level-order-traversal/description/

## Constraints
* The number of nodes in the tree is in the range `[0, 2000]`
* `-1000 <= Node.val <= 1000`

## Example
* Input: nums = [3,9,20,null,null,15,7]
* Output: [[3], [9, 20], [15, 7]]
* Explanation: This is a simplified example, the input will be a single root
node, in this example, with a value of 3. 9 is the value of it's left child and
20 is the value of the right child.

## Function Signature
`traverse(root: TreeNode) -> number[][]`

## TreeNode
```
class TreeNode {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
}
```

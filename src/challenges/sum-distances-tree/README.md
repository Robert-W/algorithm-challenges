# Sum of Distances in a tree
> https://leetcode.com/problems/sum-of-distances-in-tree/

## Constraints
* `1 <= n <= 3 * 104`
* `edges.length == n - 1`
* `edges[i].length == 2`
* `0 <= ai, bi < n`
* `ai != bi`
* `The given input represents a valid tree.`

## Example
* Input: n = 6, edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]
* Output: [8, 12, 6, 10, 10, 10]
* Explanation: dist(0, 1) + dist(0, 2) + dist(0, 3) + dist(0, 4) + dist (0, 5) = 8, so result[0] = 8. Repeat for each node.

## Function Signature
`sum_distances(n: number, edges: number[][]) -> number[]`

## About
I intially came up with a solution that is O(n * n), it works and is easy to understand. There is a way to achieve the same results with a O(n) solution. `index.js` will include the linear solution. My original solution is in a file called `slower.js`.

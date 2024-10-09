interface Tree {
  [key: number]: number[]
}

/**
  * @function sum_distances
  * @description Find the sum of the distances from each node to every other node in an undirected tree/graph
  * @param {number} n - number of nodes
  * @param {number[][]} edges - Array of arrays containing all of our edges
  * @return {number[]} The index of the array represents the sum for a node, e.g. results[0] is the sum of node 0 to all other nodes
  */
function sum_distances(n: number, edges: number[][]): number[] {
  let results = [];
  // First, construct our tree as an adjacency list
  let tree: Tree = {};

  // Add all of our edges, make sure to add them both ways
  edges.forEach(edge => {
    let [src, dest] = edge;
    // If the tree doesnt know about these edges, initialize them to an empty array
    // We are assuming in the input, no edges will be repeated, otherwise we would need these to be sets
    if (tree[src] === undefined) tree[src] = new Array();
    if (tree[dest] === undefined) tree[dest] = new Array();

    tree[src].push(dest);
    tree[dest].push(src);
  });


  // Create a dfs function to iterate through each node
  function dfs(node: number, total: number = 0, depth: number = 0, visited: Set<number> = new Set()): number {
    let children = tree[node];
    // mark this node as visited
    visited.add(node);
    // Traverse the children
    if (children) {
      children.forEach(child => {
        if (!visited.has(child)) {
          visited.add(child);
          total = 1 + depth + dfs(child, total, depth + 1, visited);
        }
      });
    }

    return total;
  }

  // Run the dfs from each node
  for (let i = 0; i < n; i++) {
    results.push(dfs(i));
  }

  return results;
}

export default sum_distances;

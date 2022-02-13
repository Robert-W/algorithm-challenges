/**
	* @function sum_distances
	* @description Find the sum of the distances from each node to every other node in an undirected tree/graph
	* @param {number} n - number of nodes
	* @param {number[][]} edges - Array of arrays containing all of our edges
	* @return {number[]} The index of the array represents the sum for a node, e.g. results[0] is the sum of node 0 to all other nodes
	*/
function sum_distances(n, edges) {
	// First, construct our tree as an adjacency list
	let tree = {};

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

	// Perform two traversals in order to properly calculate these values, store them in count and results
	let results = new Array(n).fill(0);
	let count = new Array(n).fill(1);

	function postdfs(node, parent) {
		// If we have no node, return
		if (!tree[node]) return;

		tree[node].forEach(child => {
			if (child !== parent) {
				postdfs(child, node);
				count[node] += count[child];
				results[node] += results[child] + count[child]
			}
		});
	}

	function predfs(node, parent) {
		// If we have no node, return
		if (!tree[node]) return;

		tree[node].forEach(child => {
			if (child !== parent) {
				results[child] = results[node] - (2 * count[child]) + n;
				predfs(child, node);
			}
		});
	}

	postdfs(0);
	predfs(0);

	return results;
}

module.exports = sum_distances;

/**
 * @class AdjacencyNode
 * @description Simlpe Node containing all properties a node could hold
 */
class AdjacencyNode {
	constructor(id, weight) {
		this.id = id;
		this.weight = weight;
	}
}


/**
 * @class DAG
 * @description Simple implementation of a directed acyclic graph
 */
class DAG {

	constructor() {
		this.adjacency_list = new Map();
	}

	add_edge(src, dest, weight) {
		let src_string = String(src);
		// add a node if we do not have one, this node wont have a weight property which is ok
		// nodes do not necessarily have to have a weight property
		if (!this.adjacency_list.has(src_string)) {
			this.adjacency_list.set(src_string, new Set());
		}

		let node = new AdjacencyNode(dest, weight);
		this.adjacency_list.get(src_string).add(node);
	}

	get_edges(src) {
		return Array.from(this.adjacency_list.get(String(src)) || []);
	}

	get_vertices() {
		return Array.from(this.adjacency_list.keys());
	}

	size() {
		return this.adjacency_list.size;
	}

}

export default DAG;

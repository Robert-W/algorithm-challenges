/**
 * @class AdjacencyNode
 * @description Simple Node containing all properties a node could hold
 */
class AdjacencyNode {

  id: string;
  weight: number;

	constructor(id: string, weight: number) {
		this.id = id;
		this.weight = weight;
	}
}


/**
 * @class DAG
 * @description Simple implementation of a directed acyclic graph
 */
class DAG {

  adjacency_list: Map<string, Set<AdjacencyNode>>;

	constructor() {
		this.adjacency_list = new Map();
	}

	add_edge(src: string, dest: string, weight: number) {
		// add a node if we do not have one, this node wont have a weight property which is ok
		// nodes do not necessarily have to have a weight property
		if (!this.adjacency_list.has(src)) {
			this.adjacency_list.set(src, new Set());
		}

		let node = new AdjacencyNode(dest, weight);
		this.adjacency_list.get(src)!.add(node);
	}

	get_edges(src: string): AdjacencyNode[] {
		return Array.from(this.adjacency_list.get(src) || []);
	}

	get_vertices(): string[] {
		return Array.from(this.adjacency_list.keys());
	}

	size(): number {
		return this.adjacency_list.size;
	}

}

export default DAG;

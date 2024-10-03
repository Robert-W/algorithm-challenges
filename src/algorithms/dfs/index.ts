import type DAG from "../../data-structures/dag";

interface Vertex {
  id: string;
}

/**
  * @function dfs
  * @description Function to initialize the dfs from
  * @param {string} vertex - Vertex we are visiting
  * @param {Graph} graph - Graph we are traversing,
  * @param {Set} visited - Set of nodes we have already visited
  * @return {Set} set of nodes that are reachable via the original vertex
  */
function dfs(vertex: Vertex, graph: DAG, visited: Set<string> = new Set()): Set<string> {
  // Add our current vertex to the visited Set
  visited.add(vertex.id);

  // Get all edges for this vertex
  for (let destination of graph.get_edges(vertex.id)) {
    // If we havent visited this destination, search again
    if (!visited.has(destination.id)) {
      dfs(destination, graph, visited);
    }
  }

  return visited;
};

export default dfs;

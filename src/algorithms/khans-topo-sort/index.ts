import type DAG from "../../data-structures/dag";

interface InDegreeMap {
  [key: string]: number
}

/**
  * @function topo_sort
  * @description Perform a topological sort on the given DAG
  * @param {DAG} graph - See src/data-structures/dag/index.js
  * @throws {CycleDetected}
  */
function topo_sort(graph: DAG): string[] {
  let in_degrees: InDegreeMap = {};
  let queue: string[] = new Array();
  let order: string[] = new Array();

  // Create a map of in-degrees for all vertices, set value to 0
  // Then, calculate the number of times these vertices have an edge coming towards them
  for (let vertex of graph.get_vertices()) {
    // Add the intitial vertex if it does not already exist
    if (in_degrees[vertex] === undefined) in_degrees[vertex] = 0;

    // Add an entry for each edge this vertex points to
    for (let edge of graph.get_edges(vertex)) {
      if (in_degrees[edge.id]) {
        in_degrees[edge.id]++;
      } else {
        in_degrees[edge.id] = 1; // same as in_degrees[edge.id] = 0, in_degrees[edge.id]++
      }
    }
  }

  // Search for in_degrees with length 0
  for (let [vertex, count] of Object.entries(in_degrees)) {
    if (count === 0) queue.push(vertex);
  }

  // If we have no vertices with a count of 0, then this graph contains a cycle
  if (queue.length === 0) throw new Error('CycleDetected: topo_sort has detected a cycle in your graph');

  // While the queue has entries, continue to move through the graph
  while (queue.length) {
    let vertex = queue.shift()!;
    // add this vertex to our order
    order.push(vertex);
    // for each edge, decrement its in_degree count
    for (let edge of graph.get_edges(vertex)) {
      in_degrees[edge.id] -= 1;

      if (in_degrees[edge.id] === 0) {
        queue.push(edge.id);
      }
    }
  }

  if (order.length !== Object.keys(in_degrees).length) throw new Error('CycleDetected: topo_sort has detected a cycle in your graph');

  return order;
}

export default topo_sort;

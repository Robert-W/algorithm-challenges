/**
  * @function bfs
  * @description Function to initialize the bfs from
  * @param {string} vertex - Vertex we are starting from
  * @param {Graph} graph - Graph to traverse. Must have a
	* @return {Set}
	*/
function bfs(vertex, graph) {
  let visited = new Set();
  let queue = new Array();

  // Add our current vertex to the visited Set
  visited.add(vertex.id);
  queue.push(vertex.id);

  // Go through our queue and add all unvisited neighbors
  while (queue.length) {
    // Grab the first element in our "queue"
    let vertex = queue.shift();
    // For all neighbors
    for (let neighbor of graph.get_edges(vertex)) {
      if (!visited.has(neighbor.id)) {
        visited.add(neighbor.id);
        queue.push(neighbor.id);
      }
    }
  }

  return visited;
};

module.exports = bfs;

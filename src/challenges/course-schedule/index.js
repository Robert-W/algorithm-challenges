/**
	* @function can_finish
	* @description Given an array of prerequisites and the number of courses, determine if all courses can be finished
	*/
function can_finish(numCourses, prerequisites) {
	// NOTES:
	// prerequisites[0] contains an array with two values, values[0] is a course that depends on values[1] in order to be taken
	// 0 <= ai, bi < numCourses where prerequisites[i] = [ai, bi]
	let queue = [];

	// First, create a list of vertices to represent inbound  connections, set value to 0
	let in_degrees = new Array(numCourses).fill(0);

	// Iterate over our prerequisites, and for each "dependency", aka prerequisites[n][1], increment our in_degrees counter
	for (let i = 0; i < prerequisites.length; i++) {
		in_degrees[prerequisites[i][0]] += 1;
	}

	// If we have no "in-degree" nodes, then that means all nodes are a dependency and we have a cycle, lets create a list of
	// courses with 0 for the count
	for (let i = 0; i < in_degrees.length; i++) {
		if (in_degrees[i] === 0) queue.push(i);
	}

	// As mentioned earlier, no items in queue means cycle
	if (queue.length === 0) return false;

	// Began working through our nodes, normally well track the nodes in order of them being removed for a topo sort, but we just need to return a boolean
	// in this case
	while (queue.length) {
		let course = queue.shift();
		// Iterate over all of our edges, prerequisites, and decrement any dependencies
		for (let i = 0; i < prerequisites.length; i++) {
			let prerequisite = prerequisites[i];
			// If this prerequisite requires our course to be taken, decrement the course that requires this prerequisite
			if (course === prerequisite[1]) {
				in_degrees[prerequisite[0]] -= 1;

				if (in_degrees[prerequisite[0]] === 0) {
					queue.push(prerequisite[0]);
				}
			}
		}
	}

	// If we have any counts left in in_degrees, there is a cycle
	return in_degrees.every(course => course === 0);
}

module.exports = can_finish;

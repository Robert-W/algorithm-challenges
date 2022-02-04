const DAG = require('../../data-structures/dag');
const topo_sort = require('./index');

describe('Topological Sort using Khans Algorithm', () => {

	test('should list the topological sort order for this graph', () => {
		let graph = new DAG();

		graph.add_edge('5', '2');
		graph.add_edge('5', '0');
		graph.add_edge('4', '0');
		graph.add_edge('4', '1');
		graph.add_edge('2', '3');
		graph.add_edge('3', '1');

		expect(topo_sort(graph)).toEqual(['4', '5', '2', '0', '3', '1']);
	});

	test('should throw due to there being a cycle in this graph', () => {
		let graph = new DAG();

		graph.add_edge(0, 2);
		graph.add_edge(0, 1);
		graph.add_edge(1, 3);
		graph.add_edge(1, 4);
		// Add a cycle here
		graph.add_edge(4, 1);

		expect(() => topo_sort(graph)).toThrowError('CycleDetected: topo_sort has detected a cycle in your graph');
	});

});

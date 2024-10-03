import DAG from '../../data-structures/dag';
import bfs from './index';

describe('Algorithm: Basic Breadth First Search on a directed Graph', () => {

	test('should return all child nodes from the root node', () => {
		let graph = new DAG();
		graph.add_edge(0, 1);
		graph.add_edge(1, 2);
		graph.add_edge(1, 3);
		graph.add_edge(1, 4);
		graph.add_edge(1, 5);
		graph.add_edge(1, 6);

		let expected = new Set([0, 1, 2, 3, 4, 5, 6]);

		expect(bfs({ id: 0 }, graph)).toEqual(expected);

	});

});

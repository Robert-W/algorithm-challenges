import DAG from '../../data-structures/dag';
import dfs from './index';


describe('Algorithm: Basic Depth First Search on a directed Graph', () => {

	test('should return all child nodes from the root node', () => {
		let graph = new DAG();

		graph.add_edge(0, 1);
		graph.add_edge(1, 2);
		graph.add_edge(2, 3);
		graph.add_edge(3, 4);
		graph.add_edge(4, 5);
		graph.add_edge(5, 6);

		let expected = new Set([0, 1, 2, 3, 4, 5, 6]);

		expect(dfs({ id: 0 }, graph)).toEqual(expected);
	});

});

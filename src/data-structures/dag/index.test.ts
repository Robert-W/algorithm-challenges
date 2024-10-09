import { describe, test, expect } from 'bun:test';

import DAG from './index';

describe('Graph: DAG Tests', () => {

  test('new isntance should create an adjacency list of size 0', () => {
    let graph = new DAG();

    expect(graph.adjacency_list.size).toBe(0);
  });

  test('[DANGER, COVERAGE] can allow for someone to manually add a vertex', () => {
    let graph = new DAG();

    // Don't use this, use add_adge, but this is one way things can be used now
    graph.adjacency_list.set('0', new Set());

    // Adding an edge can work this way, but seriously, add_edge does this
    graph.add_edge('0', '1', 12);

    expect(graph.size()).toBe(1);
  });

  test('add_edge should add a new node with the specified weight', () => {
    let graph = new DAG();

    // Add an edge
    graph.add_edge('0', '1', 12);

    // Grab our edges so we can make sure the weight is applied
    let edges = graph.get_edges('0');

    // Check graph size and that get_edges contains what we expect
    expect(graph.size()).toBe(1);
    expect(edges[0].id).toBe('1');
    expect(edges[0].weight).toBe(12);
  });

});

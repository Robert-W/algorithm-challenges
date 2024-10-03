import { describe, test, expect } from 'bun:test';

import Queue from './index';

describe('Queue Tests', () => {

  test('should initialize a size of 0', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  test('enqueued items in an empty list should be in the head position', () => {
    const queue = new Queue<number>();
    const value = 42;

    queue.enqueue(value);

    expect(queue.peek()).toBe(value);
  });

  test('should enqueue and dequeue items as expected', () => {
    const queue = new Queue<number>();

    // enqueue, dequeue, peek, size, isEmpty
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);

    expect(queue.size()).toEqual(3);

    expect(queue.peek()).toEqual(2);
    expect(queue.size()).toEqual(3);

    expect(queue.dequeue()).toEqual(2);
    expect(queue.size()).toEqual(2);

    // dequeue everything at this point and verify the state of the queue
    queue.dequeue();
    queue.dequeue();

    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();

    // Make sure the queue isn't broken after
    queue.enqueue(2);

    expect(queue.peek()).toEqual(2);
    expect(queue.size()).toEqual(1);
  });

});

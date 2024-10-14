import { describe, test, expect } from 'bun:test';

import Stack from './index';

describe('Stack Tests', () => {

  test('should initialize a size of 0', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTrue();
    expect(stack.size()).toBe(0);
  });

  test('pushing elements increases the size', () => {
    const stack = new Stack();

    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.size()).toBe(3);
  });

  test('pop returns the correct elements in the correct order', () => {
    const stack = new Stack();

    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.size()).toBe(3);
    expect(stack.pop()).toBe(5);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(4);
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBeTrue();
  });

  test('peek previews the top element on the stack but does not remove it', () => {
    const stack = new Stack();

    stack.push(3);

    expect(stack.size()).toBe(1);
    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(1);
  });

});

import { describe, expect, test } from 'bun:test';

import { ListNode, reverse_list } from './index';

function list_to_array(head: ListNode): number[] {
  let array = [];
  let curr: ListNode | undefined = head;

  while (curr) {
    array.push(curr.val);
    curr = curr.next;
  }

  return array
}

describe('Reverse Linked List', () => {

  test('should be able to reverse a linked list', () => {
    let five = new ListNode(5);
    let four = new ListNode(4, five);
    let three = new ListNode(3, four);
    let two = new ListNode(2, three);
    let one = new ListNode(1, two);

    expect(list_to_array(one))
      .toEqual([1, 2, 3, 4, 5]);

    expect(list_to_array(reverse_list(one)))
      .toEqual([5, 4, 3, 2, 1]);
  });

  test('should be able to doubly reverse to get the original list', () => {
    let two = new ListNode(2);
    let one = new ListNode(1, two);

    expect(list_to_array(one)).toEqual([1, 2]);

    let reversed = reverse_list(one);
    expect(list_to_array(reversed)).toEqual([2, 1]);

    let reverse_reversed = reverse_list(reversed);
    expect(list_to_array(reverse_reversed)).toEqual([1, 2]);
  });

});

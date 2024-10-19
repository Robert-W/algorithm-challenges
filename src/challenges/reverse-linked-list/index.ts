/**
 * @class ListNode
 * @description Helper class for testing the reverse function
 */
export class ListNode {

  val: number;
  next?: ListNode;

  constructor(val: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next;
  }
}

/**
 * @function reverse_list
 * @description Reverse a linked list
 * @param {ListNode} head - head of the list
 * @returns {ListNode} ListNode representing the new head
 */
export function reverse_list(head: ListNode): ListNode {
  let curr: ListNode | undefined = head;
  let prev;

  while (curr) {
    let temp: ListNode | undefined = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev!;
}

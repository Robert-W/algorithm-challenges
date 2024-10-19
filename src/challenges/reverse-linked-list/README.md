# Reverse Linked List
> https://leetcode.com/problems/reverse-linked-list/

## Constraints

* The number of nodes in the list is the range `[0, 5000]`.
* `-5000 <= Node.val <= 5000`

## Example
* Input: head = `{ val: 1, next: { val: 2, next: null }}`
* Output: `{ val: 2, next: { val: 1, next: null }}`
* Explanation: Printing the lists as an array would originally look like:
`[1, 2]`, after reversing them, it should look like `[2, 1]`. The `next`
pointers need to flip.

## Function Signature
`reverse(head: ListNode) -> ListNode`

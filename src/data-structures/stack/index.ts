interface Node<T> {
  item: T,
  next?: Node<T>
}

/**
 * @class Stack
 * @description Simple stack implementation using a singly linked list
 */
export default class Stack<T> {

  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;
  private length: number;

	constructor() {
    this.length = 0;
	}

	push(item: T) {
    // Update our size
    this.length++;

    // If we have on head, this is our first element
    if (this.head === undefined) {
      this.head = this.tail = { item };
      return;
    }

    // Traverse to the end of the list
    let node = this.head;
    while (node.next) { node = node.next; }

    // Update our tail element
    this.tail = { item };
    node.next = this.tail;
	}

  pop(): T | undefined {
    // We either have 0 or 1 items, clear out the stack
    if (this.head === this.tail) {
      let toReturn = this.head?.item;
      this.head = this.tail = undefined;
      this.length = 0;
      return toReturn;
    }

    // Lower the size
    this.length--;

    // Grab the current node and move to the second to last node
    let node = this.head;
    for (let i = 1; i < this.length; i++) { node = node?.next; }

    let toReturn = node?.next?.item;
    this.tail = node;

    return toReturn;
  }

  peek(): T | undefined {
    return this.tail?.item;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

}

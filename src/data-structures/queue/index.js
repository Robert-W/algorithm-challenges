/**
 * @class Queue
 * @description Simple Queue implementation using a linked list
 */
module.exports = class Queue {
	constructor() {
		this.head = undefined;
		this.tail = undefined;
		this.length = 0;
	}

	enqueue(item) {
		const node = { value: item };

		this.length++;

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
	}

	dequeue() {
		if (!this.head) {
			return undefined;
		}

		this.length--;

		let node = this.head;
		this.head = node.next;

		if (this.length === 0) {
			this.tail = undefined;
		}

		return node.value;
	}

	size() {
		return this.length;
	}

	peek() {
		return this.head && this.head.value;
	}

	isEmpty() {
		return this.length === 0;
	}
}

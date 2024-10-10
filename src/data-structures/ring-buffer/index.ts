/**
 * @class RingBuffer
 * @description Simple implementation of a ring buffer using two pointers
 */
export default class RingBuffer<T> {

  private buffer: Array<T>;
  private read_ptr: number;
  private write_ptr: number;
  private size: number;

  constructor(size: number) {
    this.buffer = new Array(size);
    this.read_ptr = 0;
    this.write_ptr = 0;
    this.size = 0;
  }

  read(): T | undefined {
    if (this.is_empty()) {
      return;
    }

    let item = this.buffer[this.read_ptr];
    this.read_ptr = ++this.read_ptr % this.buffer.length;
    this.size--;

    return item;
  }

  write(item: T): boolean {
    if (this.is_full()) {
      return false;
    }

    this.buffer[this.write_ptr] = item;
    this.write_ptr = ++this.write_ptr % this.buffer.length;
    this.size++;

    return true;
  }

  // Is the read slot empty and able to be written to
  // not, is the buffer completely empty
  is_empty(): boolean {
    return this.size === 0
  }

  is_full(): boolean {
    return this.size === this.buffer.length;
  }

}

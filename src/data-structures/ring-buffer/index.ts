/**
 * @class RingBuffer
 * @description Simple implementation of a ring buffer using two pointers
 */
export default class RungBuffer<T> {

  private buffer: Array<T>;
  private read_ptr: number;
  private write_ptr: number;

  constructor(size: number) {
    this.buffer = new Array(size);
    this.read_ptr = 0;
    this.write_ptr = 0;
  }

  read(): T | undefined {
    if (this.is_empty()) {
      return;
    }

    let item = this.buffer[this.read_ptr];
    this.read_ptr = ++this.read_ptr % this.buffer.length;

    return item;
  }

  write(item: T): boolean {
    if (this.is_full()) {
      return false;
    }

    this.buffer[this.write_ptr] = item;
    this.write_ptr = ++this.write_ptr % this.buffer.length;

    return true;
  }

  is_empty(): boolean {
    return this.write_ptr - this.read_ptr === 0;
  }

  is_full(): boolean {
    return this.buffer.length - Math.abs(this.write_ptr - this.read_ptr) === 0
  }

}

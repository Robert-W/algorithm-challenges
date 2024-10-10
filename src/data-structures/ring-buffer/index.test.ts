import { describe, test, expect } from 'bun:test';

import RingBuffer from './index';

describe('RingBuffer Tests', () => {

  test('should do some ring buffer things', () => {
    const buffer = new RingBuffer<number>(5);

    buffer.write(123);
    buffer.write(456);
    buffer.write(789);
    buffer.write(987);

    expect(buffer.read()).toBe(123);
    expect(buffer.read()).toBe(456);
    expect(buffer.read()).toBe(789);

    buffer.write(654);
    buffer.write(321);

    expect(buffer.read()).toBe(987);
    expect(buffer.read()).toBe(654);
    expect(buffer.read()).toBe(321);
    expect(buffer.read()).toBeUndefined();
  });

  test('should not overwrite if buffer is full', () => {
    const buffer = new RingBuffer<number>(2);

    buffer.write(123);
    buffer.write(456);

    // Buffer is full, writes should fail and our first read should still
    // be 123 and not the value we are trying to overwrite with
    expect(buffer.is_full()).toBeTrue();
    expect(buffer.write(789)).toBeFalse();
    expect(buffer.read()).toBe(123);

    // Now that we have read, we should have space to add the 789 back in
    // and reads should be 456 then the new value
    expect(buffer.is_full()).toBeFalse();
    expect(buffer.write(789)).toBeTrue();
    expect(buffer.is_full()).toBeTrue();
    expect(buffer.read()).toBe(456);
    expect(buffer.read()).toBe(789);
  });

  test('cannot read if there are no items available to read', () => {
    const buffer = new RingBuffer<number>(3);

    expect(buffer.read()).toBeUndefined();

    buffer.write(123);
    buffer.write(456);
    buffer.write(789);
    buffer.read();
    buffer.read();
    buffer.read();

    // buffer should have wrapped around at this point
    expect(buffer.read()).toBeUndefined();
  });

});

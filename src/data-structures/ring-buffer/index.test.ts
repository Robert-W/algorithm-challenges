import { describe, test, expect } from 'bun:test';

import RingBuffer from './index';

describe('RungBuffer Tests', () => {

  test('should do some things', () => {
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

});

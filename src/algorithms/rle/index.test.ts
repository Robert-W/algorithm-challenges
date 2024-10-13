import { describe, expect, test } from 'bun:test';

import { decode_array, encode_array } from './index';
import { parseIntNaNBuildCount, parseIntNaN, arrayFrom } from './bench/variants';

describe('Algorithm: Simple implementation of Run Length Encoding', () => {

  test('encode an array of characters into a string and vice versa', () => {
    let data = ['w', 'w', 'w', 'w', 'w', 'j', 'j', 'j', 'd', 'd'];

    let encoded_string = encode_array(data);
    expect(encoded_string).toEqual('5w3j2d');

    let results = decode_array(encoded_string);
    expect(results).toEqual(data);
  });

  test('alternate decode function: parseIntNaNBuildCount', () => {
    let data = ['w', 'w', 'w', 'w', 'w', 'j', 'j', 'j', 'd', 'd'];

    let encoded_string = encode_array(data);
    expect(encoded_string).toEqual('5w3j2d');

    let results = parseIntNaNBuildCount(encoded_string);
    expect(results).toEqual(data);
  });

  test('alternate decode function: parseIntNaN', () => {
    let data = ['w', 'w', 'w', 'w', 'w', 'j', 'j', 'j', 'd', 'd'];

    let encoded_string = encode_array(data);
    expect(encoded_string).toEqual('5w3j2d');

    let results = parseIntNaN(encoded_string);
    expect(results).toEqual(data);
  });

  test('alternate decode function: arrayFrom', () => {
    let data = ['w', 'w', 'w', 'w', 'w', 'j', 'j', 'j', 'd', 'd'];

    let encoded_string = encode_array(data);
    expect(encoded_string).toEqual('5w3j2d');

    let results = arrayFrom(encoded_string);
    expect(results).toEqual(data);
  });

});


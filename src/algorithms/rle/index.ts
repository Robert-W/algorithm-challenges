/**
 * @description POC of RLE with limited scope. May try to work on making this
 * more generic in the future or add extra methods for various types
 */
export function encode_array(data: string[]): string {
  let result = '';
  let current_char = '';
  let current_count = 1;

  for (let i = 0; i <= data.length; i++) {
    let char = data[i]
    if (char === current_char) {
      current_count++;
    } else {
      if (current_char !== '' && current_char !== undefined) {
        result += current_count + current_char;
      }

      current_count = 1;
      current_char = char;
    }
  }

  return result;
}

// This solution should be the fastest of all the options
// It uses for loops with Array.push
export function decode_array(encoded_string: string): string[] {
  let results = [];
  let count = '';

  for (let i = 0; i < encoded_string.length; i++) {
    let parsed = parseInt(encoded_string[i]);

    if (isNaN(parsed)) {
      let occurences = parseInt(count);
      for (let j = 0; j < occurences; j++) results.push(encoded_string[i]);
      count = ''
    } else {
      count += parsed;
    }
  }

  return results;
}

// This solution uses Array.from({ length: n }, () => char)
// combined with concat
export function decode_array_from(encoded_string: string): string[] {
  let results: string[] = [];
  let count = '';

  for (let i = 0; i < encoded_string.length; i++) {
    let parsed = parseInt(encoded_string[i]);

    if (isNaN(parsed)) {
      let occurences = parseInt(count);
      results = results.concat(Array.from({ length: occurences }, () => encoded_string[i]));
      count = ''
    } else {
      count += parsed;
    }
  }

  return results;
}

// This solution uses new Array(n).fill(char)
// combined with concat
export function decode_array_fill(encoded_string: string): string[] {
  let results: string[] = [];
  let count = '';

  for (let i = 0; i < encoded_string.length; i++) {
    let parsed = parseInt(encoded_string[i]);

    if (isNaN(parsed)) {
      let occurences = parseInt(count);
      results = results.concat(new Array(occurences).fill(encoded_string[i]));
      count = ''
    } else {
      count += parsed;
    }
  }

  return results;
}

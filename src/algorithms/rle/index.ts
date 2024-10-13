// POC of RLE with limited scope. May try to work on making this
// more generic in the future or add extra methods for various types

/**
 * @function encode_array
 * @description Takes an array of characters and returns an encoded string
 * @param {string[]} data - An array of characters
 * @returns {string} the encoded string
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

/**
 * @function decode_array
 * @description Takes an encoded string and expands it into the original array
 * @param {string} encoded_string - The encoded string
 * @returns {string[]} the original unencoded array
 */
export function decode_array(encoded_string: string): string[] {
  let result = [];
  let start = 0;

  for (let i = 0; i < encoded_string.length; i++) {
    let code = encoded_string.charCodeAt(i);

    if (code <= 48 || code >= 57) {
      let occurrences = parseInt(encoded_string.substring(start, i));
      for (let j = 0; j < occurrences; j++) result.push(encoded_string[i]);
      start = i + 1
    }
  }

  return result;
}

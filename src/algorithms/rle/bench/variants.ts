// Different variations of the decode function to see which one performs better

/**
  * @function parseIntNaNBuildCount
  * @description Uses parseInt and isNaN to check for character being a string
  * or a number. Also, builds the count as a string and then parses it.
  */
export function parseIntNaNBuildCount(encoded_string: string): string[] {
  let results = [];
  let count = '';

  for (let i = 0; i < encoded_string.length; i++) {
    let parsed = parseInt(encoded_string[i]);

    if (isNaN(parsed)) {
      let occurences = parseInt(count);
      for (let j = 0; j < occurences; j++)
        results.push(encoded_string[i]);
      count = ''
    } else {
      count += parsed;
    }
  }

  return results;
}

/**
  * @function parseIntNaN
  * @description Uses parseInt and isNaN, everything else is the same
  */
export function parseIntNaN(encoded_string: string): string[] {
  let result = [];
  let start = 0;

  for (let i = 0; i < encoded_string.length; i++) {
    let parsed = parseInt(encoded_string[i]);

    if (isNaN(parsed)) {
      let occurrences = parseInt(
        encoded_string.substring(start, i)
      );
      for (let j = 0; j < occurrences; j++)
        result.push(encoded_string[i]);
      start = i + 1
    }
  }

  return result;
}

/**
  * @function arrayFrom
  * @description Uses Array.from to concat to the array instead of a loop and
  * push approach.
  */
export function arrayFrom(encoded_string: string): string[] {
  let result: string[] = [];
  let start = 0;

  for (let i = 0; i < encoded_string.length; i++) {
    let code = encoded_string.charCodeAt(i);

    if (code <= 48 || code >= 57) {
      let occurrences = parseInt(encoded_string.substring(start, i));
      result = result.concat(
        Array.from({ length: occurrences }, () => encoded_string[i])
      )
      start = i + 1
    }
  }

  return result;
}

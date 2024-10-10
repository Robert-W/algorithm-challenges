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

/**
  * I wanted to test a couple parts of this function for performance.
  * Test was done in jsbench.me, but could probably look into using a proper
  * benchmarking module (maybe benny) and moving the tests in here. First up
  * was testing the fastest way to check if a character is not a number. I
  * tested three methods:
  *
  * 1. let num = parseInt(char); isNaN(num);
  * 2. !('0' <= char && char <= '9')
  * 3. let code = char.charCodeAt(0); code <= 48 || code >= 57
  *
  * Option 1 ran 30% slower with 129M ops/s ± 1.27%
  * Option 2 ran 27% slower with 135M ops/s ± 0.57%
  * Option 3 was the fastest with 186M ops/s ± 0.89%
  *
  * The next thing to benchmark was how to parse a number of variable length.
  * Take '123foo' for example, I need to know the index of where to start since
  * this pattern repeats (e.g. '12f24g327h1k'). I tested two methods:
  *
  * 1. Iterate over the string, build up another string and call parse int.
  *    So take this string, '12f', I could code it something like this
  *    let count = ''
  *    for (let i = 0; i < str.length; i++) {
  *      if (str[i] === someValueThatsNotANumber) {
  *        let occurences = parseInt(count)
  *        count = ''
  *      } else {
  *        count += str[i]
  *      }
  *    }
  * 2. Iterate over the string, take a substring and parse it, track the start
  *    index and go from there to current index. For the same '12f' string:
  *    let start = 0
  *    for (let i = 0; i < str.length; i++) {
  *      if (str[i] === someValueThatsNotANumber) {
  *        let occurrences = parseInt(str.substring(start, i));
  *        start = i;
  *      }
  *    }
  *
  * Option 1 ran 81% slower, with 1.3M ops/s ± 1.6%
  * Option 2 ran faster, with 6.9M ops/s ± 1.2%
  *
  * The last thing to test was inserting data into an array. The winner was
  * obvious but I wanted to see how much it mattered. Here are the three test
  * runs:
  *
  * 1. results = []
  *    for (let i = 0; i < 10; i++) results.push('a')
  * 2. results = []
  *    results = results.concat(Array.from({ length: 10 }, () => 'a'))
  * 3. results = []
  *    results = results.concat(new Array(10).fill('a'))
  *
  * Option 1 was the fastest with 20M ops/s ± 1.07%
  * Option 2 was 91% slower with 1.7M ops/s ± 1.23%
  * Option 3 was 8% slower with 18M ops/s ± 1.94%
  *
  * See the original fastest impl is below, but this was before running any
  * benchmarks. Comparing this to the one used we saw the following benchmarks:
  *
  * Original version was 75% slower with 1.2M ops/s ± 1.57%
  * Version written after benchmarks was faster with 4.7M ops/s ± 1.17%
  *
  * function decode_array(encoded_string: string): string[] {
  *   let results = [];
  *   let count = '';
  *
  *   for (let i = 0; i < encoded_string.length; i++) {
  *     let parsed = parseInt(encoded_string[i]);
  *
  *     if (isNaN(parsed)) {
  *       let occurences = parseInt(count);
  *       for (let j = 0; j < occurences; j++) results.push(encoded_string[i]);
  *       count = ''
  *     } else {
  *       count += parsed;
  *     }
  *   }
  *
  *   return results;
  * }
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

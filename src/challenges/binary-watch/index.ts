/**
 * @function read_binary_watch
 * @description Take a number of highlighted bits on a binary watch and return
 * all the permutations it could be (the valid times)
 * @param {number} turned_on - How many bits are turned on
 * @returns {string[]} - Permuations of potentially valid times
 */
export default function read_binary_watch(turned_on: number): string[] {
  let result: string[] = [];

  // Ignore the appearance of the watch, the potential values are equivalent to
  // valid times, aka hours are between 1 - 12, minutes 1 - 60
  for (let hour = 0; hour < 12; hour++) {
    // In Binary, a 1 indicates that a bit is on, use this on minutes as well
    let hour_ones = hour ? hour.toString(2).match(/1/g)!.length : 0;

    for (let minute = 0; minute < 60; minute++) {
      let minute_ones = minute ? minute.toString(2).match(/1/g)!.length : 0;

      if (hour_ones + minute_ones === turned_on) {
        result.push(`${hour}:${minute < 10 ? '0' + minute : minute }`);
      }
    }
  }

  return result;
}

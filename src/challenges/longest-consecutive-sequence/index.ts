/**
  * @function longest_sequence
  * @param {number[]} nums - Unordered array of numbers
  * @returns {number} longest sequence length
  */
function longest_sequence(nums: number[]): number {
  // convert nums to a set
  let numset = new Set(nums);
  let longest = 0;

  // Iterate over our nums array and if a num is a start of a sequence, begin counting
  for (let i = 0; i < nums.length; i++) {

    // if numset does not contain the previous value, this is the start of a sequence
    if (!numset.has(nums[i] - 1)) {
      let current = nums[i];
      let streak = 1;

      // while we still have a consecutive sequence, increase our count
      while(numset.has(current + 1)) {
        current += 1;
        streak += 1;
      }

      longest = Math.max(streak, longest);
    }
  }

  return longest;
}

export default longest_sequence;

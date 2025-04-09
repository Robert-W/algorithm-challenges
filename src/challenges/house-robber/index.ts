/**
 * @function rob
 * @description Calculate the maximum number we can rob without alerting the
 * authorities
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums: number[]): number {
  let prev = 0;
  let curr = 0;

  nums.forEach(num => {
    let temp = Math.max(num + prev, curr);
    prev = curr;
    curr = temp;
  })

  return curr;
}

export default rob;

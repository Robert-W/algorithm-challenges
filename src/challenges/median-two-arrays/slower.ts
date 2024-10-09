/**
  * @function median
  * @description Finds the median of the two sorted arrays
  * @param {number[]} nums1 - Ordered array of numbers
  * @param {number[]} nums2 - Ordered array of numbers
  * @return {number}
  */
function median(nums1: number[], nums2: number[]): number | undefined {
  // force nums1 to be smaller
  if (nums1.length > nums2.length) return median(nums2, nums1);

  let target = (nums1.length + nums1.length) >> 1;
  let values = [];
  let one = 0;
  let two = 0;

  // Create a new array with the correct value up til the median target
  while (one + two <= target) {
    // Any numeric comparisons against undefined are false in javascript
    // so as long as nums1 is the smaller array, if the index is "out of bounds",
    // this evaluates to false and two gets incremented. Well hit the target before
    // two > nums2.length
    if (nums1[one] < nums2[two]) {
      values.push(nums1[one]);
      ++one;
    } else {
      values.push(nums2[two]);
      ++two;
    }
  }

  // return our median
  return (nums1.length + nums2.length) % 2 === 0
    ? (values.pop()! + values.pop()!) / 2
    : values.pop();
}

export default median;

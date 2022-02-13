# Median Two Arrays
> https://leetcode.com/problems/median-of-two-sorted-arrays/

## Constraints
* `nums1.length == m`
* `nums2.length == n`
* `0 <= m <= 1000`
* `0 <= n <= 1000`
* `1 <= m + n <= 2000`
* `-106 <= nums1[i], nums2[i] <= 106`

## Example
* Input: nums1 = [1,2], nums2 = [3,4]
* Output: 2.5
* Explanation: merged array is [1, 2, 3, 4] with the median being 2 + 3 / 2

## Function Signature
`median(nums1: number[], nums2: number[]) -> number`

## About
There are two solutions here, one is the one I originally came up with. It is `slower.js` and runs wiht time and space O(n + m / 2). Leetcode requires a complexity of O(log (n + m)), so there is a solution in `index.js` using a binary search across two different arrays. This is a bit trickier to follow, but meets the requirement.

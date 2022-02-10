# Longest Consecutive Sequence
> See https://leetcode.com/problems/longest-consecutive-sequence/

## Constraints
* 0 <= nums.length <= 105
* -109 <= nums[i] <= 109

## Example
* Input: `nums = [100,4,200,1,3,2]`
* Output: `4`
* Explanation: The longest consecutive sequence is 1, 2, 3, 4

## Function Signature
`longest_sequence(nums: number[]) -> number`

## About
Using a set, we can identify the start of each sequence and from there attempt to count up one at a time checking to see how long the sequence is.

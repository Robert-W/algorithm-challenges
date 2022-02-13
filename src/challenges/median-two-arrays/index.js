/**
	* @function median
	* @description Finds the median of the two sorted arrays
	* @param {number[]} smaller - Ordered array of numbers
	* @param {number[]} larger - Ordered array of numbers
	* @return {number}
	*/
function median(smaller, larger) {
	// Force smaller to actually be smaller
	if (smaller.length > larger.length) return median(larger, smaller);

	// Pointers for the smaller array that we will use to calculate our partitions
	let end = smaller.length;
	let start = 0;

	while (start <= end) {
		// Calculate our partitions
		let psmall = Math.floor((start + end) / 2);
		let plarge = Math.ceil((smaller.length + larger.length) / 2) - psmall;

		// Get left and right values of the partition from each array
		let lsmall = psmall === 0 ? Number.MIN_SAFE_INTEGER : smaller[psmall - 1];
		let rsmall = psmall === smaller.length ? Number.MAX_SAFE_INTEGER : smaller[psmall];
		let llarge = plarge === 0 ? Number.MIN_SAFE_INTEGER : larger[plarge - 1];
		let rlarge = plarge === larger.length ? Number.MAX_SAFE_INTEGER : larger[plarge];

		// What the above essentially does is use the partitions to get the values at key points in
		// both arrays. Its allowing us to simulate like we have two sections. For example, consider
		// the following inputs. smaller = [1, 2, 3], larger = [4, 5, 6, 7]; Then we calculate:
		// psmall = 1, plarge = 3, lsmall = 1, rsmall = 2, llarge = 6, rlarge = 6
		// Conceptually, we are creating two halves. So the first half is [1, 4, 5, 6] and the
		// the second is [2, 3, 7]. This wont match the condition below so we will need to move
		// the partitions and recalculate this part until we meet the condition, see after the
		// function for comments on what this looks like every iteration

		// If this condition is true, it means all numbers in the "first half" are smaller then the "second half"
		if (lsmall <= rlarge && llarge <= rsmall) {
			return (smaller.length + larger.length) % 2 === 0
				? (Math.max(lsmall, llarge) + Math.min(rsmall, rlarge)) / 2
				: Math.max(lsmall, llarge);
		}

		if (lsmall > rlarge) {
			end = psmall - 1;
		} else {
			start = psmall + 1;
		}
	}
}

/**
	* Walkthrough of what all variables will be in each iteration and how this works:
	* Input: smaller = [1, 2, 3], larger = [4, 5, 6, 7]
	* Output: 4
	* Iterations:
	* 1st pass (0 <= 3)
	* psmall = 1, plarge = 3, lsmall = 1, rsmall = 2, llarge = 6, rlarge = 7
	* first half = [1, 4, 5, 6], second half = [2, 3, 7]
	* condition: 1 <= 7 && 6 <= 2, no match, 1 > 7 means start = 2
	* 2nd pass (2 <= 3)
	* psmall = 2, plarge = 2, lsmall = 2, rsmall = 3, llarge = 5, rlarge = 6
	* first half = [1, 2, 4, 5], second half = [3, 6, 7]
	* condition: 2 <= 6 && 5 <= 3, no match, 2 > 6 means start = 3
	* 3rd pass (3 <= 3)
	* psmall = 3, plarge = 1, lsmall = 3, rsmall = MAX_SAFE_INTEGER, llarge = 4, rlarge = 5
	* first half = [1, 2, 3, 4], second half = [5, 6, 7]
	* condition: 3 <= 5 && 4 <= MAX_SAFE_INTEGER, match, the entire first half is less than the entire second half
	* since the total length of the combined arrays is odd, we return Math.max(3, 4) = 4
	*
	* Another example with even lengthed arrays
	* Input: smaller = [1, 3], larger = [2, 4]
	* Output: 2.5
	* Iterations:
	* 1st pass (0 <= 2)
	* psmall = 1, plarge = 1, lsmall = 1, rsmall = 3, llarge = 2, rlarge = 4
	* first half = [1, 2], second half = [3, 4]
	* condition 1 <= 4 && 2 <= 3, match, the entire first half is less than the entire second half
	* total length is even, we return (Math.max(1, 2) + Math.min(3, 4)) / 2 = 2.5
	*/

module.exports = median;

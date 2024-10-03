/**
	* @function findTargetSums
	* @description Find all variations of two numbers whose sum is target
	* @param {number[]} sorted
	* @param {number} target
	* @return {number[]}
	*/
function findTargetSums (sorted, target) {
	let right = sorted.length - 1;
	let left = 0;

	let sum = sorted[left] + sorted[right];

	while (sum !== target) {
		if (sum < target) left++;
		if (sum > target) right--;

		sum = sorted[left] + sorted[right];
	}

	return [left + 1, right + 1];
}

export default findTargetSums;

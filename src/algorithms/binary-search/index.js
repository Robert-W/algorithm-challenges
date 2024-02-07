/**
	* @function recursiveBinarySearch
	* @description Function to initialize the binarySearch from
	* @param {number} item - Item to compare
	* @param {number[]} data - Sorted array of data to search
	* @param {number} start - starting location to search from
	* @param {number} end - ending location to search from
	* @return {number}
	*/
function recursiveBinarySearch(item, data, start = 0, end = data.length) {
	// base case, return -1 signlaing we cannot find the item
	if (start > end) return -1;

	// Calculate our mid point
	let mid = Math.floor((start + end) / 2);

	// if we found our item, return the index of the found item
	if (data[mid] === item) return mid;

	// search only the relvant half
	return data[mid] > item
		? recursiveBinarySearch(item, data, start, mid - 1)
		: recursiveBinarySearch(item, data, mid + 1, end);
};

/**
 * @function binarySearch
 * @param {number[]} data - sorted list of numbers
 * @param {number} target - number I am looking for
 * @returns {number}
 */
function binarySearch(data, target) {
	let left = 0, right = data.length - 1

	while (left <= right) {
		let mid = left + (right - left >> 1)

		if (data[mid] === target) return mid
		else if (data[mid] < target) left = mid + 1
		else right = mid - 1
	}

	return -1
}

module.exports = {
	recursiveBinarySearch,
	binarySearch
}

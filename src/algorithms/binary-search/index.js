/**
  * @function binarySearch
  * @description Function to initialize the binarySearch from
  * @param {number} item - Item to compare
	* @param {number[]} data - Sorted array of data to search
	* @param {number} start - starting location to search from
	* @param {number} end - ending location to search from
	* @return {number}
	*/
function binarySearch(item, data, start = 0, end = data.length) {
	// base case, return -1 signlaing we cannot find the item
	if (start > end) return -1;

	// Calculate our mid point
	let mid = Math.floor((start + end) / 2);

	// if we found our item, return the index of the found item
	if (data[mid] === item) return mid;

	// search only the relvant half
	return data[mid] > item
		? binarySearch(item, data, start, mid -1)
		: binarySearch(item, data, mid + 1, end);
};

module.exports = binarySearch;

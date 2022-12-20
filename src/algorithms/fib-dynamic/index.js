/**
  * @function fibonacci
  * @description Function to run a dynamic version of fibonacci
	* @param {number} n - number to stop at
	* @return {number}
	*/
function fibonacci(n) {
	let first = 0, second = 1, temp, idx;

	if (n === 0) return first;

	for (idx = 2; idx <= n; idx++) {
		temp = first + second;
		first = second;
		second = temp;
	}

	return second;
};

module.exports = fibonacci;

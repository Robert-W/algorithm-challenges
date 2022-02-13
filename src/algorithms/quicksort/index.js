/**
	* @function partition
	* @description Partition function used in the quick sort algorithm
	*/
function partition(data, low, high) {
	let pivot = data[high];
	let temp;

	// index of smaller element
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
		// If the current element is less than or equal to the pivot
		// swap data[i] and data[j]
		if (data[j] <= pivot) {
			i++;

			temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		}
	}

	// swap data[i + 1] and our pivot
	temp = data[i + 1];
	data[i + 1] = data[high];
	data[high] = temp;

	return i + 1;
}


/**
	* @function quicksort
	* @description Iterative version of the quicksort algorithm
	* @param {number[]} data - Array of numbers to sort, this algorithm could be adapated based on the data type
	* @param {number} start - starting index
	* @param {number} end - ending index
	* @return {number[]}
	*/
function quicksort(data, start, end) {
	// Create a stack
	let stack = new Array();

	// Initialize the stack with some values
	stack.push(start);
	stack.push(end);

	while (stack.length) {

		let high = stack.pop();
		let low = stack.pop();

		// Set the pivot element
		let pivot = partition(data, low, high);

		// If there are elements on the left side of the pivot
		// then push the left side to the stack
		if (pivot - 1 > low) {
			stack.push(low);
			stack.push(pivot - 1);
		}

		// If there are elements on the right side of the pivot
		// then push the right side to the stack
		if (pivot + 1 < high) {
			stack.push(pivot + 1);
			stack.push(high);
		}
	}

	return data;
}

module.exports = quicksort;

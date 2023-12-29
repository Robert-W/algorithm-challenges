const binarySearch = require('./index');

describe('Algorithm: Basic Binary Search on a sorted array of numbers', () => {

	test('should return the index of the found item', () => {
		let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let result = binarySearch(5, data);

		expect(result).toEqual(4);
	});

	test('should return -1 if it cannot find the item', () => {
		let data = [0, 1, 2, 3, 4, 5, 6];
		let result = binarySearch(12, data);

		expect(result).toEqual(-1);
	});

});

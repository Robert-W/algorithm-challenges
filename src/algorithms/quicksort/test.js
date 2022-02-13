const quicksort = require('./index');

describe('Algorithm: Quicksort algorithm on an array of numbers', () => {

	test('should sort the given array into the correct order', () => {
		let data = [6, 5, 4, 3, 2, 1];
		expect(quicksort(data, 0, data.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6]);
	});

});

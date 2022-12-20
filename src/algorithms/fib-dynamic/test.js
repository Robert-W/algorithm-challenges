const fibonacci = require('./index');

describe('Algorithm: Fibonacci using dynamic programming', () => {

	test('should return the correct value for n in the fibonacci sequence', () => {
		let zero = fibonacci(0);
		let one = fibonacci(1);
		let thirtyFour = fibonacci(9);

		expect(zero).toEqual(0);
		expect(one).toEqual(1);
		expect(thirtyFour).toEqual(34);
	});

});

import findTargetSums from './index';

describe('YouTube: Two Sum 2 Challenge', () => {

	test('should return the correct indices given the sorted array', () => {
		const input = [1, 3, 4, 5, 7, 10, 11, 15];
		const output = [3, 4];
		const target = 9;

		expect(findTargetSums(input, target)).toEqual(output);
	});

});

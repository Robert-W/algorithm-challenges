import longest_sequence from './index';

describe('Leetcode: Longest Consecutive Sequence', () => {

	test('should return 0 when given an empty array', () => {
		expect(longest_sequence([])).toBe(0);
	});

	test('should return 1 when there are no consecutive numbers', () => {
		expect(longest_sequence([12, 24, 36, 48, 60])).toBe(1);
	});

	test('should return the correct length when given multiple consecutive numbers', () => {
		expect(longest_sequence([100, 4, 200, 3, 2, 1])).toBe(4);
		expect(longest_sequence([6, 5, 4, 3, 2, 1, 0])).toBe(7);
		expect(longest_sequence([12, 32, 11, 31, 27, 62])).toBe(2);
	});

});

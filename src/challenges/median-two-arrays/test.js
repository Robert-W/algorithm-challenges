const median_faster = require('./index');
const median_slower = require('./slower');


describe('Leetcode: Median of Two Sorted Arrays', () => {

	test('should get the median with an odd total length of the arrays', () => {
		let nums1 = [1, 3, 4];
		let nums2 = [2, 5, 6, 7];
		let expected = 4;

		expect(median_faster(nums1, nums2)).toBe(expected);
		expect(median_slower(nums1, nums2)).toBe(expected);
	});

	test('should get the median with an even total length of the arrays', () => {
		let nums1 = [1, 2, 3, 4];
		let nums2 = [5, 6, 7, 8];
		let expected = 4.5;

		expect(median_faster(nums1, nums2)).toBe(expected);
		expect(median_slower(nums1, nums2)).toBe(expected);
	});

	test('should get the median correctly when the first array is longer', () => {
		let nums1 = [5, 10, 15, 20];
		let nums2 = [10, 20, 30];
		let expected = 15;

		expect(median_faster(nums1, nums2)).toBe(expected);
		expect(median_slower(nums1, nums2)).toBe(expected);
	});

	test('should get the median correctly when the first array is larger and shorter', () => {
		let nums1 = [5, 6, 7];
		let nums2 = [1, 2, 3, 4];
		let expected = 4;

		expect(median_faster(nums1, nums2)).toBe(expected);
		expect(median_slower(nums1, nums2)).toBe(expected);
	});

});

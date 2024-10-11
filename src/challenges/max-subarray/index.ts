/**
 * @function max_subarray_sum
 * @description Find the subarray with the largest sum
 * This implementation uses kadane's algorithm
 */
export function max_subarray_sum(input: number[]): number {
  let curr_sum = input[0];
  let best_sum = input[0];

  for (let i = 1; i < input.length; i++) {
    curr_sum = input[i] + curr_sum > input[i]
      ? input[i] + curr_sum
      : input[i];

    best_sum = best_sum > curr_sum
      ? best_sum
      : curr_sum;
  }

  return best_sum
}

/**
 * @function max_subarray_indices
 * @description Find the indices of the subarray with the largest sum
 * This implementation uses kadane's algorithm
 */
export function max_subarray_indices(input: number[]): number[] {
  // TODO: Implement
  return input;
}

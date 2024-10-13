/**
 * @function max_subarray_sum_ternary
 * @description This variation uses ternary expressions in place of Math.max
 */
export function max_subarray_sum_ternary(input: number[]): number {
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


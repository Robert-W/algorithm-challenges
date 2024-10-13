import { run, bench, summary } from 'mitata';

import { max_subarray_sum } from '../index';
import { max_subarray_sum_ternary } from './use_ternary';

summary(() => {

  bench('max_subarray_sum()', () => {
    max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    max_subarray_sum(
      [-2, 1, -3, 4, -1, 2, 1, -5, 4, -3, 5, 6, -7, 10, 4, 8, -9]
    );
  });

  bench('max_subarray_ternary()', () => {
    max_subarray_sum_ternary([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    max_subarray_sum_ternary(
      [-2, 1, -3, 4, -1, 2, 1, -5, 4, -3, 5, 6, -7, 10, 4, 8, -9]
    );
  });

});

await run();

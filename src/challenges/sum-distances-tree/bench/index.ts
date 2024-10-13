import { run, bench, summary } from 'mitata';

import sum_distances from '../index';
import single_dfs from './single_dfs';

summary(() => {

  bench('sum_distances()', () => {
    let edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]];
    sum_distances(6, edges);
  });

  bench('single_dfs()', () => {
    let edges = [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]];
    single_dfs(6, edges);
  });

});

await run();

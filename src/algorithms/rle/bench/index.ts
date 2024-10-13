import { run, bench, summary } from 'mitata';

import { decode_array } from '../index';
import { parseIntNaNBuildCount, parseIntNaN, arrayFrom } from './variants';

summary(() => {

  bench('decode_array()', () => {
    decode_array('1e23d142f');
  });

  bench('parseIntNaNBuildCount()', () => {
    parseIntNaNBuildCount('1e23d142f');
  });

  bench('parseIntNaN()', () => {
    parseIntNaN('1e23d142f');
  });

  bench('arrayFrom()', () => {
    arrayFrom('1e23d142f');
  });

});

await run();


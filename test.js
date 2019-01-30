import test from 'ava';

import { fromString } from './lib/read-path';


test('single from string', t => {
  const expected = ['/usr/local/bin'];
  const actual = fromString("PATH=/usr/local/bin");
  t.deepEqual(expected, actual);
});

test('multiple from string', t => {
  const expected = ['/usr/local/bin', '/usr/bin'];
  const actual = fromString("PATH=/usr/local/bin\nPATH=$PATH:/usr/bin");
  t.deepEqual(expected, actual);
});

import test from 'ava';

import { fromString, fromFile } from './lib/read-path';


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

test('multiple from file', t => {
  const expected = [
  ];
  const actual = fromFile("example.sh", "utf-8");
  t.deepEqual(expected, actual);
});

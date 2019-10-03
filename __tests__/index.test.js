import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const testFiles = [
  ['before.json', 'after.json'],
  ['before.yml', 'after.yml'],
  ['before.ini', 'after.ini'],
];

test.each(testFiles)(
  'gendiff(%s, %s)',
  (before, after) => {
    const pathToBeforeFile = path.resolve(__dirname, `__fixtures__/${before}`);
    const pathToAfterFile = path.resolve(__dirname, `__fixtures__/${after}`);
    const pathToRefenseFile = path.resolve(__dirname, '__fixtures__/result.txt');
    const reference = fs.readFileSync(pathToRefenseFile, 'utf-8').trim();

    expect(gendiff(pathToBeforeFile, pathToAfterFile)).toEqual(reference);
  },
);

import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const testFiles = [
  ['before-tree.json', 'after-tree.json', 'result-tree.txt'],
  ['before-tree.yml', 'after-tree.yml', 'result-tree.txt'],
];

test.each(testFiles)(
  'gendiff(%s, %s)',
  (before, after, result) => {
    const pathToBeforeFile = path.resolve(__dirname, `__fixtures__/${before}`);
    const pathToAfterFile = path.resolve(__dirname, `__fixtures__/${after}`);
    const pathToRefenseFile = path.resolve(__dirname, `__fixtures__/${result}`);
    const reference = fs.readFileSync(pathToRefenseFile, 'utf-8').trim();

    expect(gendiff(pathToBeforeFile, pathToAfterFile)).toEqual(reference);
  },
);

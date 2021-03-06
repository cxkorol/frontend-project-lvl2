import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const testFiles = [
  ['tree', 'before-tree.json', 'after-tree.json', 'result-tree.txt'],
  ['tree', 'before-tree.yml', 'after-tree.yml', 'result-tree.txt'],
  ['tree', 'before-tree.ini', 'after-tree.ini', 'result-tree.txt'],
  ['plain', 'before-tree.yml', 'after-tree.yml', 'result-plain.txt'],
  ['plain', 'before-tree.json', 'after-tree.json', 'result-plain.txt'],
  ['plain', 'before-tree.ini', 'after-tree.ini', 'result-plain.txt'],
  ['json', 'before-tree.json', 'after-tree.json', 'result-json.txt'],
  ['json', 'before-tree.ini', 'after-tree.ini', 'result-json.txt'],
];

test.each(testFiles)(
  'gendiff(%s, %s, %s, %s)',
  (format, before, after, result) => {
    const pathToBeforeFile = path.resolve(__dirname, `__fixtures__/${before}`);
    const pathToAfterFile = path.resolve(__dirname, `__fixtures__/${after}`);
    const pathToRefenseFile = path.resolve(__dirname, `__fixtures__/${result}`);
    const reference = fs.readFileSync(pathToRefenseFile, 'utf-8').trim();

    expect(gendiff(pathToBeforeFile, pathToAfterFile, format)).toEqual(reference);
  },
);

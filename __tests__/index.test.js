import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const pathToBeforeFile = path.resolve(__dirname, '__fixtures__/before.json');
const pathToAfterFile = path.resolve(__dirname, '__fixtures__/after.json');
const pathToRefenseFile = path.resolve(__dirname, '__fixtures__/result.txt');
const reference = fs.readFileSync(pathToRefenseFile, 'utf-8').trim();

test('Result and outputs must be equal', () => {
  expect(gendiff(pathToBeforeFile, pathToAfterFile)).toEqual(reference);
});

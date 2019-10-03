import _ from 'lodash/fp';
import parse from './parcer';

const compare = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const allKeys = _.union(keys1, keys2);

  const resultArray = allKeys.reduce((acc, key) => {
    if (!keys1.includes(key) && keys2.includes(key)) return [...acc, `  + ${key}: ${object2[key]}`];
    if (keys1.includes(key) && !keys2.includes(key)) return [...acc, `  - ${key}: ${object1[key]}`];
    if (object2[key] === object1[key]) return [...acc, `    ${key}: ${object2[key]}`];
    return [...acc, `  - ${key}: ${object1[key]}`, `  + ${key}: ${object2[key]}`];
  }, []);

  return `{\n${resultArray.join('\n')}\n}`;
};

const gendiff = (file1, file2) => compare(parse(file1), parse(file2));

export default gendiff;

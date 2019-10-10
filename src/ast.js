import _ from 'lodash';

const makeAst = (object1, object2) => {
  const allKeys = _.union(_.keys(object1), _.keys(object2));

  const conditions = [
    {
      check: (key) => _.isObject(object1[key]) && _.isObject(object2[key]),
      diffType: (key) => ({
        type: 'parent',
        key,
        children: makeAst(object1[key], object2[key]),
      }),
    },
    {
      check: (key) => !_.has(object1, key),
      diffType: (key) => ({
        type: 'new',
        key,
        value: object2[key],
      }),
    },
    {
      check: (key) => !_.has(object2, key),
      diffType: (key) => ({
        type: 'deleted',
        key,
        value: object1[key],
      }),
    },
    {
      check: (key) => object1[key] === object2[key],
      diffType: (key) => ({
        type: 'unchanged',
        key,
        value: object1[key],
      }),
    },
    {
      check: (key) => object1[key] !== object2[key],
      diffType: (key) => ({
        type: 'changed',
        key,
        beforeValue: object1[key],
        afterValue: object2[key],
      }),
    },
  ];

  const getMethod = (key) => conditions.find(({ check }) => check(key));

  const result = allKeys.map((key) => {
    const currentMethod = getMethod(key);
    const node = currentMethod.diffType(key);
    return node;
  });
  return result;
};

export default makeAst;

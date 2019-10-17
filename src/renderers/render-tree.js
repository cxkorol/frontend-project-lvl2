import _ from 'lodash';

const makeTab = (times) => '  '.repeat(times);

const makeString = (object, depth) => {
  if (!_.isObject(object)) return object;
  const openingTab = makeTab(depth + 2);
  const closingTab = makeTab(depth + 1);
  const keys = _.keys(object);
  return `{\n${keys.map((key) => `${openingTab}  ${key}: ${object[key]}`).join('\n')}\n${closingTab}}`;
};

const render = (ast) => {
  const iter = (data, depth = 1) => data.map((object) => {
    const tab = makeTab(depth);
    const text = makeString(object.value, depth);
    switch (object.type) {
      case 'new':
        return `${tab}+ ${object.key}: ${text}`;
      case 'deleted':
        return `${tab}- ${object.key}: ${text}`;
      case 'changed':
        return [`${tab}- ${object.key}: ${makeString(object.beforeValue, depth)}`, `${tab}+ ${object.key}: ${makeString(object.afterValue, depth)}`];
      case 'unchanged':
        return `${tab}  ${object.key}: ${text}`;
      case 'parent':
        return `${tab}  ${object.key}: {\n${_.flatten(iter(object.children, depth + 2)).join('\n')}\n${makeTab(depth + 1)}}`;
      default:
        throw new Error(`${object.type} is uncorrect`);
    }
  });
  return `{\n${(_.flatten(iter(ast))).join('\n')}\n}`;
};

export default render;

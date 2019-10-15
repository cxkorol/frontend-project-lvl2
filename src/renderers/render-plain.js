import _ from 'lodash';

const makeString = (value) => (_.isObject(value) ? '[complex value]' : value);

const render = (ast) => {
  const iter = (data, path = '') => data.map((object) => {
    switch (object.type) {
      case 'new':
        return `Property ${path}${object.key} was added with value: ${makeString(object.value)}`;
      case 'deleted':
        return `Property ${path}${object.key} was removed`;
      case 'unchanged':
        return null;
      case 'changed':
        return `Property ${path}${object.key} was updated. From ${makeString(object.beforeValue)} to ${makeString(object.afterValue)}`;
      case 'parent':
        return `${iter(object.children, `${path}${object.key}.`).filter((node) => !!node).join('\n')}`;
      default:
        throw new Error(`${object.type} is uncorrect`);
    }
  });
  return iter(ast).join('\n');
};

export default render;

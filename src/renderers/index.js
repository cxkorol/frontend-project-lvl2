import tree from './render-tree';
import plain from './render-plain';
import json from './render-json';

const renderFormats = {
  tree,
  plain,
  json,
};

const getRenderer = (format = 'tree') => renderFormats[format];

export default getRenderer;

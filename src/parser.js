import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const getParseFormat = (ext) => {
  const formats = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  return formats[ext];
};

const fileToString = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getExt = (filepath) => path.extname(filepath);

const parse = (filepath) => {
  const getData = getParseFormat(getExt(filepath));
  return getData(fileToString(filepath));
};

export default parse;

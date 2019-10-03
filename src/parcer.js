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

const parse = (filepath) => {
  const ext = path.extname(filepath);
  const rawObject = fs.readFileSync(filepath, 'utf-8');
  const parcer = getParseFormat(ext);
  const parsedObject = parcer(rawObject);
  return parsedObject;
};

export default parse;

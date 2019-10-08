import parse from './parcer';
import makeAst from './ast';
import render from './render';

const genDiff = (file1, file2) => {
  const object1 = parse(file1);
  const object2 = parse(file2);
  const ast = makeAst(object1, object2);
  const result = render(ast);
  return result;
};

export default genDiff;

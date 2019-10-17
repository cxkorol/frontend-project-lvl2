import parse from './parser';
import makeAst from './ast';
import getRenderer from './renderers';

const genDiff = (filepath1, filepath2, format) => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);
  const ast = makeAst(object1, object2);
  const render = getRenderer(format);
  const result = render(ast);
  return result;
};

export default genDiff;

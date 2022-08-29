let esprima = require("esprima");
let estraverse = require("estraverse-fb");
let sourceCode = `
  <h1 id="title">
    <span>hello</span>world
  </h1>
`;

let ast = esprima.parseModule(sourceCode, { jsx: true, tokens: true });
// console.log(JSON.stringify(ast));

let ident = 0;
function padding() {
  return " ".repeat(ident);
}

estraverse.traverse(ast, {
  enter(node) {
    console.log(padding() + node.type + "进入");
    ident += 2;
  },
  leave(node) {
    ident -= 2;
    console.log(padding() + node.type + "离开");
  },
});

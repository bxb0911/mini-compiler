// [
//   { type: 'Punctuator', value: '<' },
//   { type: 'JSXIdentifier', value: 'h1' },
//   { type: 'JSXIdentifier', value: 'id' },
//   { type: 'Punctuator', value: '=' },
//   { type: 'String', value: '"title"' },
//   { type: 'Punctuator', value: '>' },
//   { type: 'JSXText', value: '\n    ' },
//   { type: 'Punctuator', value: '<' },
//   { type: 'JSXIdentifier', value: 'span' },
//   { type: 'Punctuator', value: '>' },
//   { type: 'JSXText', value: 'hello' },
//   { type: 'Punctuator', value: '<' },
//   { type: 'Punctuator', value: '/' },
//   { type: 'JSXIdentifier', value: 'span' },
//   { type: 'Punctuator', value: '>' },
//   { type: 'JSXText', value: 'world\n  ' },
//   { type: 'Punctuator', value: '<' },
//   { type: 'Punctuator', value: '/' },
//   { type: 'JSXIdentifier', value: 'h1' },
//   { type: 'Punctuator', value: '>' }
// ]
const PunRE = /<|>|=|\//;
const strRE = /"|'/;
const tagRE = /h[1-5]|b|i|p|br|div|span|html|head|body/;
const attrRE = /id|class|alt/;
const Punctuator = "Punctuator";
const JSXIdentifier = "JSXIdentifier";
const String = "String";
const JSXText = "JSXText";
let currentToken;
let tokens = [];

function emit(token) {
  currentToken = { type: "", value: "" };
  tokens.push(token);
}

function start(char) {
  if (PunRE.test(char)) {
    currentToken = { type: Punctuator, value: "" };
    return punctuator(char);
  }
}

function punctuator(char) {
  if (char === "<" || char === ">" || char === "=" || char === "/") {
    currentToken.value = char;
    emit(currentToken);
    currentToken = { type: Punctuator, value: "" };
    return jsxIdentifier;
  }
}

function jsxIdentifier(char) {
  if (!PunRE.test(char) && !strRE.test(char)) {
    currentToken.value += char;
    return jsxIdentifier;
  } else if (char !== " " || char !== "=") {
    return;
  }
}

function tokenizer(input) {
  let state = start;
  for (let char of input) {
    state = state(char);
  }
  return tokens;
}

let sourceCode = `<h1`;

console.log(tokenizer(sourceCode));

module.exports = {
  tokenizer,
};

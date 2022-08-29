const NumRE = /[0-9]/;
const Numeric = "Numeric";
const Punctuator = "Punctuator";
let tokens = [];
let currentToken;

function emit(token) {
  currentToken = { type: "", value: "" };
  tokens.push(token);
}

/**
 * start 表示开始状态
 * @param {string} char
 * @returns 返回下一个状态函数
 */
function start(char) {
  if (NumRE.test(char)) {
    currentToken = { type: Numeric, value: "" };
  }
  return number(char);
}

function number(char) {
  if (NumRE.test(char)) {
    currentToken.value += char;
    return number;
  } else if (char === "+" || char === "-") {
    emit(currentToken);
    emit({ type: Punctuator, value: char });
    currentToken = { type: Numeric, value: "" };
    return number;
  }
}

function tokenizer(input) {
  let state = start;
  for (let char of input) {
    state = state(char);
  }
  currentToken.value.length && emit(currentToken);
}

tokenizer("10+20+30-40");

console.log(tokens);

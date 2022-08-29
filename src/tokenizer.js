function tokenizer(input) {
  let tokens = [];
  let state = start;
  for (let char of input) {
    state = start(char);
  }
  return tokens;
}

let sourceCode = `<h1 id="title"><span>hello</span>world</h1>`;

module.exports = {
  tokenizer,
};

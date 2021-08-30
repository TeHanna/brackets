module.exports = function check(str, bracketsConfig) {
  const leftBrackets = ['(', '[', '|'];
  const pairBrackets = {
    [')']: '(',
    [']']: '[',
    ['|']: '|',

  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i];
    if (leftBrackets.includes(curSymbol)) {
      stack.push(curSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let lastElement = stack[stack.length - 1];
      if (pairBrackets[curSymbol] === lastElement) {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  }
}


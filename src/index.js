module.exports = function check(str, bracketsConfig) {
  const leftBrackets = ['(', '[', '|', '{', '1', '3', '5', '7', '8'];
  const pairBrackets = {
    [')']: '(',
    [']']: '[',
    ['|']: '|',
    ['}']: '{',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
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
  }
  return stack.length === 0;
}

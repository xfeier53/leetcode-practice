/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  let func = (current, open, close) => {
    if (open > 0) {
      current += "(";
      func(current, open - 1, close + 1);
      current = current.substring(0, current.length - 1);
    }
    if (close > 0) {
      current += ")";
      func(current, open, close - 1);
    }
    if (open === 0 && close === 0) {
      result.push(current);
      return;
    }
  };
  func("", n, 0);
  return result;
};

console.error(generateParenthesis(3));

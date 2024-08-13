/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    let number = digits[i] + 1;
    if (number <= 9) {
      result.unshift(...digits.splice(0, i), number);
      break;
    } else {
      result.unshift(0);
    }
  }
  if (result[0] === 0) {
    result.unshift(1);
  }
  return result;
};

console.error(plusOne([8, 9, 9, 9]));

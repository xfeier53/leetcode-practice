/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stringResult = "";
  let negative = false;
  let leadingZero = true;
  if (x === 0) {
    return 0;
  }
  if (x < 0) {
    negative = true;
    x = -x;
  }
  let stringX = x.toString();
  for (let i = stringX.length - 1; i >= 0; i--) {
    let char = stringX.charAt(i);
    if (leadingZero && char === "0") {
      continue;
    } else {
      leadingZero = false;
    }
    stringResult += char;
  }
  let result = parseInt(stringResult);
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return negative ? -result : result;
};

console.error(reverse(1534236469));
console.error(reverse(123));
console.error(reverse(-123));

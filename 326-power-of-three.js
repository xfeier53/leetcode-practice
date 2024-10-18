/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n % 3 === 0 && n !== 0) {
    n /= 3;
  }
  return n === 1;
};

console.error(isPowerOfThree(28));

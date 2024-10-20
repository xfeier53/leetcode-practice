/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 31; i >= 0; i--) {
    if (n & 1) {
      result += Math.pow(2, i);
    }
    n >>= 1;
  }
  return result;
};

console.error(reverseBits(43261596));

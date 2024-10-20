/**
 * @param {number} n
 * @return {number}
 */
// var hammingWeight = function (n) {
//   let count = 0;
//   for (let i = 31; i >= 0; i--) {
//     if (n === 0) {
//       break;
//     }
//     let num = Math.pow(2, i);
//     if (n >= num) {
//       count++;
//       n -= num;
//     }
//   }
//   return count;
// };
// var hammingWeight = function (n) {
//   let pre = n % 2;
//   let count = pre === 1 ? 1 : 0;
//   for (let i = 2; i <= Math.sqrt(n) + 2; i++) {
//     let cal = n % Math.pow(2, i);
//     if (cal !== pre) {
//       count++;
//       pre = cal;
//     }
//   }
//   return count;
// };
// var hammingWeight = function (n) {
//   let count = 0;
//   for (i of n.toString(2)) {
//     if (i === "1") {
//       count++;
//     }
//   }
//   return count;
// };
// var hammingWeight = function (n) {
//   n.toString(2).split("0").join("").length;
// };
var hammingWeight = function (n) {
  let result = 0;
  while (n !== 0) {
    result += n & 1; // Add 1 to result if the least significant bit is 1
    n >>= 1; // Right shift the bits of n by 1
  }
  return result;
};

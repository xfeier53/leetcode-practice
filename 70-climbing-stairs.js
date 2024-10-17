/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 2;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
var climbStairs = function (n) {
  let array = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array[n];
};

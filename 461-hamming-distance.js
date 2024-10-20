/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function (x, y) {
//   let count = 0;
//   for (let i = 31; i >= 0; i--) {
//     let num = Math.pow(2, i);
//     if ((x >= num && y < num) || (x < num && y >= num)) {
//       count++;
//     }
//     if (x >= num) {
//       x -= num;
//     }
//     if (y >= num) {
//       y -= num;
//     }
//   }
//   return count;
// };
var hammingDistance = function (x, y) {
  let count = 0;
  while (x !== 0 || y !== 0) {
    if ((x & 1 && !(y & 1)) || (!(x & 1) && y & 1)) {
      count++;
    }
    x >>= 1;
    y >>= 1;
  }
  return count;
};

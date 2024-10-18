/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function (n) {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         count++;
//         break;
//       }
//     }
//   }
//   let result = n - count - 2;
//   return result < 0 ? 0 : result;
// };
var countPrimes = function (n) {
  if (n < 2) {
    return 0;
  }
  let collection = new Array(n).fill(true);
  collection[0] = false;
  collection[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (collection[i]) {
      for (let j = i * i; j < n; j += i) {
        collection[j] = false;
      }
    }
  }
  return collection.filter(Boolean).length;
};

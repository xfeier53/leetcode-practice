/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return ((nums.length + 1) * nums.length) / 2 - sum;
// };
var missingNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= i;
    result ^= nums[i];
  }
  return result ^ nums.length;
};

console.error(missingNumber([3, 0, 1]));

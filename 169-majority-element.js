/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let collection = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!collection.has(nums[i])) {
//       collection.set(nums[i], 1);
//     } else {
//       collection.set(nums[i], collection.get(nums[i]) + 1);
//     }
//   }
//   for (let [key, value] of collection) {
//     if (value > nums.length / 2) {
//       return key;
//     }
//   }
// };
var majorityElement = function (nums) {
  let result = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== result) {
      count--;
      if (count === 0) {
        result = nums[i];
        count = 1;
      }
    } else {
      count++;
    }
  }
  return result;
};

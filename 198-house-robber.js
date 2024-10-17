/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   if (nums.length === 2) {
//     return Math.max(nums[0], nums[1]);
//   }
//   let lastNum = nums[nums.length - 1];
//   let tillSecondLast = rob(nums.slice(0, nums.length - 2));
//   let tillLast = rob(nums.slice(0, nums.length - 1));
//   return Math.max(tillSecondLast + lastNum, tillLast);
// };
// var rob = function (nums) {
//   let func = (nums, result) => {
//     if (nums.length === 1) {
//       return nums[0];
//     }
//     if (nums.length === 2) {
//       return Math.max(nums[0], nums[1]);
//     }
//     let lastNum = nums[nums.length - 1];
//     result[nums.length - 2] = result[nums.length - 2] || func(nums.slice(0, nums.length - 2), result);
//     result[nums.length - 1] = result[nums.length - 1] || func(nums.slice(0, nums.length - 1), result);
//     return Math.max(result[nums.length - 2] + lastNum, result[nums.length - 1]);
//   };
//   let result = new Array(nums.length);
//   return func(nums, result);
// };
// var rob = function (nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   if (nums.length === 2) {
//     return Math.max(nums[0], nums[1]);
//   }
//   let result = [nums[0], Math.max(nums[0], nums[1])];
//   for (let i = 2; i < nums.length; i++) {
//     result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
//   }
//   return result[result.length - 1];
// };
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let tillSecondLast = nums[0];
  let tillLast = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    let temp = tillLast;
    tillLast = Math.max(tillSecondLast + nums[i], tillLast);
    tillSecondLast = temp;
  }
  return tillLast;
};
console.error(rob([2, 7, 9, 3, 1]));

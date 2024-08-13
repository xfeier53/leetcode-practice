/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let zeroIndex = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zeroIndex.push(i);
//     }
//   }
//   for (let i = zeroIndex.length - 1; i >= 0; i--) {
//     nums.splice(zeroIndex[i], 1);
//     nums.push(0);
//   }
// };

// var moveZeroes = function(nums) {
//   let index = 0;
//   let loopCount = nums.length;
//   while (index < loopCount) {
//     if (nums[index] === 0) {
//       nums.splice(index, 1);
//       nums.push(0);
//       loopCount--;
//     } else {
//       index++;
//     }
//   }
// };

var moveZeroes = function (nums) {
  let index = 0;
  let zeroIndex = 0;
  let zeroCount = 0;
  let loopCount = nums.length;
  while (index < loopCount) {
    if (nums[index] === 0) {
      if (zeroCount === 0) {
        zeroIndex = index;
      }
      zeroCount++;
      index++;
    } else if (zeroCount !== 0) {
      nums.splice(zeroIndex, zeroCount);
      for (let i = 0; i < zeroCount; i++) {
        nums.push(0);
        loopCount--;
        index--;
      }
      zeroCount = 0;
    } else {
      index++;
    }
  }
};

var nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
moveZeroes(nums);
console.error(nums);

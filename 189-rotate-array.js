/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let move = k % nums.length;
  let movedArray = nums.splice(nums.length - move, move);
  nums.unshift(...movedArray);
};

var nums = [1, 2];
rotate(nums, 5);
console.error(nums);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

console.error(findKthLargest([3, 2, 1, 5, 6, 4], 2));

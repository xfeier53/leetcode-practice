/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let lastSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    lastSum += nums[i];
    if (lastSum < nums[i]) {
      lastSum = nums[i];
    }
    if (lastSum > maxSum) {
      maxSum = lastSum;
    }
  }
  return maxSum;
};

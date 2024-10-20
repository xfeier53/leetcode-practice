/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = 0;
  let start = 0;
  let end = 0;
  let sum = 0;
  while (end < nums.length) {
    sum += nums[end];
    if (sum >= target) {
      if (min === 0) {
        min = end - start + 1;
      }
      while (sum - nums[start] >= target) {
        sum -= nums[start];
        start++;
      }
      min = Math.min(min, end - start + 1);
    }
    end++;
  }
  return min;
};

console.error(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

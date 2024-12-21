/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let times = 0;
  let current_farthest = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > current_farthest) {
      current_farthest = farthest;
      times++;
    }
    farthest = Math.max(farthest, i + nums[i]);
  }
  return times;
};

console.log(jump([2, 3, 1, 1, 4]));

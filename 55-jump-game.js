/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(i + nums[i], maxReach);
  }
  return true;
};

console.error(canJump([2, 3, 1, 1, 4]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let checkMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    if (checkMap.has(otherNum)) {
      return [checkMap.get(otherNum), i];
    }
    checkMap.set(nums[i], i);
  }
};

console.error(twoSum([2, 11, 7, 15], 9));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

console(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

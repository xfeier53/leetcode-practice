/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var result = [];
  let resultIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      result[resultIndex] = i;
      resultIndex++;
    }
  }
  for (let i = result.length - 1; i >= 0; i--) {
    nums.splice(result[i], 1);
  }
};

var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
console.error(nums);

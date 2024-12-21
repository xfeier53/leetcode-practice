/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    while (i < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    if (start === nums[i]) {
      result.push(start.toString());
    } else {
      result.push(start + "->" + nums[i]);
    }
  }
  return result;
};

console.error(summaryRanges([0, 1, 2, 4, 5, 7]));

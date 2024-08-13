/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return set.values().next().value;
};

var singleNumber = function (nums) {
  let result = 0;
  nums.forEach((num) => {
    result = result ^ num;
  });
  return result;
};

var nums = [4, 1, 2, 1, 2];
console.error(singleNumber(nums));

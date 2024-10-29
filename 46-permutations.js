/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let func = (permutation, nums) => {
    if (nums.length === 0) {
      result.push([...permutation]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      permutation.push(nums[i]);
      let copy = nums.slice().filter((_, index) => index !== i);
      func(permutation, copy);
      permutation.pop();
    }
  };
  func([], nums);
  return result;
};

console.error(permute([1, 2, 3]));

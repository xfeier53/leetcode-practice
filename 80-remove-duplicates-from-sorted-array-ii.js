/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let duplicates = 0;
  for (let i = 0; i < nums.length; i++) {
    if (duplicates !== 0) {
      nums[i - duplicates] = nums[i];
    }
    let count = 0;
    while (nums[i + 1] === nums[i] && i < nums.length) {
      i++;
      if (duplicates !== 0) {
        nums[i - duplicates] = nums[i];
      }
      count++;
    }
    if (count <= 1) {
      continue;
    } else {
      duplicates += count - 1;
    }
  }
  return nums.length - duplicates;
};

console.error(removeDuplicates([1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 5]));
console.error(removeDuplicates([1, 1, 1, 2, 2, 3]));

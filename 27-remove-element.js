/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[start] === val) {
      while (start < end) {
        if (nums[end] !== val) {
          [nums[start], nums[end]] = [nums[end], nums[start]];
          count++;
          break;
        }
        end--;
      }
    } else {
      count++;
    }
    start++;
  }
  return count;
};

console.error(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.error(removeElement([2], 3));

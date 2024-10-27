/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   let collection = new Array(nums.length);
//   for (let i = 0; i < nums.length; i++) {
//     let max = 1;
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[j] < nums[i] && collection[j] + 1 > max) {
//         max = collection[j] + 1;
//       }
//     }
//     collection[i] = max;
//   }
//   return collection.sort((a, b) => a - b)[collection.length - 1];
// };
var lengthOfLIS = function (nums) {
  let collection = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let left = 0;
    let right = collection.length;
    while (left < right) {
      let mid = Math.floor((right + left) / 2);
      if (collection[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left === collection.length) {
      collection.push(nums[i]);
    } else {
      collection[left] = nums[i];
    }
  }
  return collection.length;
};

console.error(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   let longestConsecutive = 0;
//   let collection = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (collection.has(nums[i])) {
//       continue;
//     }
//     if (collection.has(nums[i] - 1) && collection.has(nums[i] + 1)) {
//       let left = collection.get(nums[i] - 1);
//       let right = collection.get(nums[i] + 1);
//       left.push(...right, nums[i]);
//       for (let i = 0; i < right.length; i++) {
//         collection.set(right[i], left);
//       }
//       collection.set(nums[i], left);
//     } else if (collection.has(nums[i] - 1)) {
//       let left = collection.get(nums[i] - 1);
//       left.push(nums[i]);
//       collection.set(nums[i], left);
//     } else if (collection.has(nums[i] + 1)) {
//       let right = collection.get(nums[i] + 1);
//       right.push(nums[i]);
//       collection.set(nums[i], right);
//     } else {
//       collection.set(nums[i], [nums[i]]);
//     }
//     longestConsecutive = Math.max(collection.get(nums[i]).length, longestConsecutive);
//   }
//   return longestConsecutive;
// };
var longestConsecutive = function (nums) {
  let longestConsecutive = 0;
  let dedupNums = new Set(nums);
  dedupNums.forEach((value) => {
    if (!dedupNums.has(value - 1)) {
      let current = value;
      let count = 1;
      while (dedupNums.has(current + 1)) {
        current++;
        count++;
      }
      longestConsecutive = Math.max(longestConsecutive, count);
    }
  });
  return longestConsecutive;
};

console.error(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

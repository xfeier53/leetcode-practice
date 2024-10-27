/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   let collection = [];
//   let sorted = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length; i++) {
//     for (let j = i + 1; j < sorted.length; j++) {
//       for (let k = j + 1; k < sorted.length; k++) {
//         if (sorted[i] + sorted[j] + sorted[k] === 0) {
//           collection.push([sorted[i], sorted[j], sorted[k]]);
//           break;
//         }
//       }
//       while (sorted[j + 1] === sorted[j]) {
//         j++;
//       }
//     }
//     while (sorted[i + 1] === sorted[i]) {
//       i++;
//     }
//   }
//   return collection;
// };
// var threeSum = function (nums) {
//   let collection = [];
//   let sorted = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length; i++) {
//     for (let j = sorted.length - 1; j > i + 1; j--) {
//       let midIndex;
//       let twoSum = sorted[i] + sorted[j];
//       if (twoSum < 0) {
//         midIndex = j - 1;
//         while (midIndex > i && twoSum + sorted[midIndex] >= 0) {
//           if (twoSum + sorted[midIndex] === 0) {
//             collection.push([sorted[i], sorted[j], sorted[midIndex]]);
//             break;
//           }
//           midIndex--;
//         }
//       } else {
//         midIndex = i + 1;
//         while (midIndex < j && twoSum + sorted[midIndex] <= 0) {
//           if (twoSum + sorted[midIndex] === 0) {
//             collection.push([sorted[i], sorted[j], sorted[midIndex]]);
//             break;
//           }
//           midIndex++;
//         }
//       }
//       while (sorted[j - 1] === sorted[j]) {
//         j--;
//       }
//     }
//     while (sorted[i + 1] === sorted[i]) {
//       i++;
//     }
//   }
//   return collection;
// };
var threeSum = function (nums) {
  let collection = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let fixNum = sorted[i];
    let start = i + 1;
    let end = sorted.length - 1;
    while (start < end) {
      let sum = fixNum + sorted[start] + sorted[end];
      if (sum > 0) {
        end--;
      } else if (sum < 0) {
        start++;
      } else {
        collection.push([fixNum, sorted[start], sorted[end]]);
        while (nums[start + 1] === nums[start] && start < end) {
          start++;
        }
        start++;
      }
    }
  }
  return collection;
};

console.error(threeSum([-1, 0, 1, 2, -1, -4]));

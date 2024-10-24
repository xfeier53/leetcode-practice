/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let result = 0;
//   for (let i = 1; i < height.length - 1; i++) {
//     if (height[i - 1] <= height[i]) {
//       continue;
//     }
//     let index = i + 1;
//     let potentialUnit = 0;
//     let blocks = height[i];
//     let endIndex = i + 1;
//     while (index < height.length) {
//       if (height[index] >= height[i - 1]) {
//         potentialUnit = (index - i) * height[i - 1] - blocks;
//         endIndex = index;
//         break;
//       }
//       if (height[index] >= height[i]) {
//         let newPotentialUnit = (index - i) * Math.min(height[index], height[i - 1]) - blocks;
//         if (newPotentialUnit > potentialUnit && height[index] >= height[endIndex]) {
//           potentialUnit = newPotentialUnit;
//           endIndex = index;
//         }
//       }
//       blocks += height[index];
//       index++;
//     }
//     if (potentialUnit !== 0) {
//       result += potentialUnit;
//       i = endIndex;
//     }
//   }
//   return result;
// };
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }

  return water;
};

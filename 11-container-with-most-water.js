/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;
  while (left < right) {
    mostWater = Math.max(mostWater, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return mostWater;
};

console.error(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

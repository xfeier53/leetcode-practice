/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   let baseMap = new Map();
//   let resultMap = new Map();
//   let baseArray = nums1.length > nums2.length ? nums2 : nums1;
//   let checkAgainst = nums1.length > nums2.length ? nums1 : nums2;
//   baseArray.forEach((num) => {
//     if (!baseMap.has(num)) {
//       baseMap.set(num, 1);
//     } else {
//       baseMap.set(num, baseMap.get(num) + 1);
//     }
//   });
//   checkAgainst.forEach((num) => {
//     if (baseMap.has(num)) {
//       if (!resultMap.has(num)) {
//         resultMap.set(num, 1);
//       } else {
//         resultMap.set(num, Math.min(baseMap.get(num), resultMap.get(num) + 1));
//       }
//     }
//   });
//   let result = [];
//   for (let [key, value] of resultMap) {
//     for (let i = 0; i < value; i++) {
//       result.push(key);
//     }
//   }
//   return result;
// };

var intersect = function (nums1, nums2) {
  nums1.sort((n1, n2) => n1 - n2);
  nums2.sort((n1, n2) => n1 - n2);
  let baseArray = nums1.length > nums2.length ? nums2 : nums1;
  let checkAgainst = nums1.length > nums2.length ? nums1 : nums2;
  let result = [];
  let baseIndex = 0;
  let checkIndex = 0;
  while (baseIndex < baseArray.length && checkIndex < checkAgainst.length) {
    if (baseArray[baseIndex] === checkAgainst[checkIndex]) {
      result.push(baseArray[baseIndex]);
      baseIndex++;
      checkIndex++;
    } else if (baseArray[baseIndex] < checkAgainst[checkIndex]) {
      baseIndex++;
    } else {
      checkIndex++;
    }
  }
  return result;
};

console.error(
  intersect(
    [
      61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67,
      34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60,
      10, 55, 66, 82, 0, 79, 11, 81,
    ],
    [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]
  )
);

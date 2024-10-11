/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (index2 < 0) {
      break;
    }
    if (nums1[index1] > nums2[index2]) {
      nums1[i] = nums1[index1];
      index1--;
    } else {
      nums1[i] = nums2[index2];
      index2--;
    }
  }
};
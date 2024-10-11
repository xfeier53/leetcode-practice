/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let node = {};
  let func = (node, nums) => {
    if (!nums.length) {
      return null;
    }
    let index = Math.floor(nums.length / 2);
    node.val = nums[index];
    let leftNums = nums.slice(0, index);
    let rightNums = nums.slice(index + 1, nums.length);
    if (leftNums.length) {
      node.left = {};
      func(node.left, leftNums);
    } else {
      node.left = null;
    }
    if (rightNums.length) {
      node.right = {};
      func(node.right, rightNums);
    } else {
      node.right = null;
    }
  };
  func(node, nums);
  return node;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);

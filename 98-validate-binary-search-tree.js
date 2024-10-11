/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   if (!root) {
//     return true;
//   }
//   const func = (node, collection) => {
//     if (node.left) {
//       func(node.left, collection);
//     }
//     collection.push(node.val);
//     if (node.right) {
//       func(node.right, collection);
//     }
//   };
//   let collection = [];
//   func(root, collection);
//   for (let i = 0; i < collection.length - 1; i++) {
//     if (collection[i] >= collection[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
var isValidBST = function (root) {
  const func = (node, leftGrandparent, rightGrandparent) => {
    if (!node) {
      return true;
    }
    if (node.left && (node.val <= node.left.val || (leftGrandparent && node.left.val <= leftGrandparent))) {
      return false;
    }
    if (node.right && (node.val >= node.right.val || (rightGrandparent && node.right.val >= rightGrandparent))) {
      return false;
    }
    return func(node.left, leftGrandparent, node.val) && func(node.right, node.val, rightGrandparent);
  };

  return func(root, null, null);
};

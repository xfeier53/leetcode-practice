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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];
  let func = (node, level, result) => {
    if (!node) {
      return;
    }
    if (!result[level]) {
      result[level] = [node.val];
    } else {
      result[level].push(node.val);
    }
    if (node.left) {
      func(node.left, level + 1, result);
    }
    if (node.right) {
      func(node.right, level + 1, result);
    }
  };
  func(root, 0, result);
  return result;
};

let test = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 17,
      left: null,
      right: null,
    },
  },
};
levelOrder(test);

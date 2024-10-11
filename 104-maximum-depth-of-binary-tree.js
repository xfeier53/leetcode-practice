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
 * @return {number}
 */
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }
//   let queue = [];
//   let current = { node: root, depth: 1 };
//   let maxDepth = 1;
//   let index = -1;
//   while (current && current.node) {
//     let leftNode = current.node.left;
//     let rightNode = current.node.right;
//     let newDepth = current.depth + 1;
//     if (leftNode) {
//       maxDepth = maxDepth < newDepth ? newDepth : maxDepth;
//       queue.push({ node: leftNode, depth: newDepth });
//     }
//     if (rightNode) {
//       maxDepth = maxDepth < newDepth ? newDepth : maxDepth;
//       queue.push({ node: rightNode, depth: newDepth });
//     }
//     index++;
//     current = queue[index];
//   }
//   return maxDepth;
// };
var maxDepth = function (root) {
  const func = (node, level) => {
    if (!node) {
      return level;
    }
    let leftLevel = level + 1;
    let rightLevel = level + 1;
    if (node.left) {
      leftLevel = func(node.left, level + 1);
    }
    if (node.right) {
      rightLevel = func(node.right, level + 1);
    }
    return leftLevel > rightLevel ? leftLevel : rightLevel;
  };
  return func(root, 0);
};

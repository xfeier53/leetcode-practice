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
// var isSymmetric = function (root) {
//   let func = (tree1, tree2) => {
//     if (!tree1 && !tree2) {
//       return true;
//     }
//     if ((tree1 && !tree2) || (!tree1 && tree2) || tree1.val !== tree2.val) {
//       return false;
//     }
//     return func(tree1.right, tree2.left) && func(tree1.left, tree2.right);
//   };
//   return func(root, root);
// };
var isSymmetric = function (root) {
  let leftCollection = [root];
  let rightCollection = [root];
  let index = 0;
  while (index < leftCollection.length) {
    let leftNode = leftCollection[index];
    let rightNode = rightCollection[index];
    if (!leftNode && !rightNode) {
      index++;
      continue;
    }
    if ((!leftNode && rightNode) || (leftNode && !rightNode) || leftNode.val !== rightNode.val) {
      return false;
    }
    leftCollection.push(leftNode.left);
    rightCollection.push(rightNode.right);

    leftCollection.push(leftNode.right);
    rightCollection.push(rightNode.left);
    index++;
  }
  return true;
};

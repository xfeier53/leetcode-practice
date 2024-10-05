/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   let limit = Math.pow(10, 5);
//   let outOfLimit = limit + 1;
//   while (head) {
//     if (head.val > limit) {
//       return true;
//     }
//     head.val = outOfLimit;
//     head = head.next;
//   }
//   return false;
// };

var hasCycle = function (head) {
  let fast = head;
  while (fast) {
    head = head.next;
    if (!fast.next) {
      return false;
    }
    fast = fast.next.next;
    if (head === fast) {
      return true;
    }
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let deleteNode = head;
  let checkNode = head;
  for (let i = 0; i < n; i++) {
    checkNode = checkNode.next;
  }
  if (!checkNode && deleteNode.next) {
    return deleteNode.next;
  }
  if (!checkNode) {
    return null;
  }
  while (checkNode.next) {
    checkNode = checkNode.next;
    deleteNode = deleteNode.next;
  }
  if (deleteNode.next.next) {
    deleteNode.next.val = deleteNode.next.next.val;
    deleteNode.next.next = deleteNode.next.next.next;
  } else {
    deleteNode.next = null;
  }
  return head;
};

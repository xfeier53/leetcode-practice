/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (!head) {
//     return null;
//   }
//   if (!head.next) {
//     return head;
//   }
//   let newHead = reverseList(head.next);
//   let temp = newHead;
//   while (temp.next) {
//     temp = temp.next;
//   }
//   temp.next = head;
//   head.next = null;
//   return newHead;
// };

var reverseList = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }

  let current = head;
  let nextNode = current.next;
  while (nextNode) {
    let temp = nextNode.next;
    nextNode.next = current;
    current = nextNode;
    nextNode = temp;
  }
  head.next = null;
  return current;
};

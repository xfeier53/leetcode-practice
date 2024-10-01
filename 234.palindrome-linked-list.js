/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   if (!head.next) {
//     return true;
//   }
//   let firstPoint = head;
//   let secondPoint = head;
//   let firstHalf = [];
//   while (secondPoint) {
//     firstHalf.push(firstPoint.val);
//     firstPoint = firstPoint.next;
//     secondPoint = secondPoint.next;
//     if (secondPoint) {
//       secondPoint = secondPoint.next;
//     } else {
//       firstHalf.pop();
//     }
//   }
//   while (firstPoint) {
//     if (firstPoint.val !== firstHalf.pop()) {
//       return false;
//     }
//     firstPoint = firstPoint.next;
//   }
//   return true;
// };

var isPalindrome = function (head) {
  if (!head.next) {
    return true;
  }
  let current = head;
  let nextNode = current.next;
  let secondPoint = head;
  let odd = true;
  while (secondPoint) {
    secondPoint = secondPoint.next;
    if (secondPoint) {
      secondPoint = secondPoint.next;
      if (secondPoint) {
        let temp = nextNode.next;
        nextNode.next = current;
        current = nextNode;
        nextNode = temp;
      } else {
        odd = false;
      }
    }
  }
  if (odd) {
    current = current.next;
  }
  while (nextNode) {
    if (current.val !== nextNode.val) {
      return false;
    }
    current = current.next;
    nextNode = nextNode.next;
  }
  return true;
};

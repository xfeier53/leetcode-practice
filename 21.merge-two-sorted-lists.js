/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }
  if (!list1 && list2) {
    return list2;
  }
  if (!list2 && list1) {
    return list1;
  }
  let head;
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  let currentList = head;
  while (list1 || list2) {
    if (!list1) {
      currentList.next = list2;
      break;
    }
    if (!list2) {
      currentList.next = list1;
      break;
    }
    if (list1.val < list2.val) {
      currentList.next = list1;
      list1 = list1.next;
    } else {
      currentList.next = list2;
      list2 = list2.next;
    }
    currentList = currentList.next;
  }
  return head;
};

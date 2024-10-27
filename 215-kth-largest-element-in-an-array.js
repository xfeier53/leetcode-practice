/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => a - b);
//   return nums[nums.length - k];
// };
var findKthLargest = function (nums, k) {
  let minHeap = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < nums.length; i++) {
    minHeap.enqueue(nums[i]);
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }
  return minHeap.dequeue().element;
};

console.error(findKthLargest([3, 2, 1, 5, 6, 4], 2));

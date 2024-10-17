/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let newNums = this.nums.slice();
  for (let i = newNums.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [newNums[i], newNums[randomIndex]] = [newNums[randomIndex], newNums[i]];
  }
  return newNums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

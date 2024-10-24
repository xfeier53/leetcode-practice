var StockSpanner = function () {
  this.prices = [];
  this.increasingCount = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function (price) {
//   this.prices.push(price);
//   for (let i = this.prices.length - 2; i >= 0; i--) {
//     if (this.prices[i] > price) {
//       return this.prices.length - 1 - i;
//     }
//   }
//   return this.prices.length;
// };
StockSpanner.prototype.next = function (price) {
  this.prices.push(price);
  if (this.prices.length === 1 || price < this.prices[this.prices.length - 2]) {
    this.increasingCount = 1;
    return 1;
  } else {
    this.increasingCount++;
  }
  let spanner = this.increasingCount;
  for (let i = this.prices.length - 1 - this.increasingCount; i >= 0; i--) {
    if (this.prices[i] <= price) {
      spanner++;
    } else {
      break;
    }
  }
  return spanner;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    }
    let diff = prices[i] - lowestPrice;
    maxProfit = diff > maxProfit ? diff : maxProfit;
  }
  return maxProfit;
};

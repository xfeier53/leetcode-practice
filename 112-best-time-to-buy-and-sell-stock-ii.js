/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sellIndex = prices.length - 1;
  let result = 0;
  for (let i = sellIndex; i >= 0; i--) {
    if (prices[i] > prices[sellIndex]) {
      sellIndex = i;
    } else if (prices[i] < prices[sellIndex]) {
      result += prices[sellIndex] - prices[i];
      sellIndex = i;
    }
  }
  return result;
};

var prices = [7, 1, 5, 3, 6, 4];
console.error(maxProfit(prices));

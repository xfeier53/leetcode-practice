/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   if (amount === 0) {
//     return 0;
//   }
//   let func = (coins, amount, count) => {
//     let collection = [];
//     for (let i = 0; i < coins.length; i++) {
//       let diff = amount - coins[i];
//       if (diff === 0) {
//         return count + 1;
//       }
//       if (diff < 0) {
//         continue;
//       }
//       if (diff > 0) {
//         collection.push(func(coins, diff, count + 1));
//       }
//     }
//     return collection.sort()[0];
//   };
//   return func(coins, amount, 0) || -1;
// };
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.error(coinChange([2], 5));

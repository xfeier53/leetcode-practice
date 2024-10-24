/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let result = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let sum = result[i + j + 1] + Number(num1[i]) * Number(num2[j]);
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }
  while (result[0] === 0 && result.length > 1) {
    result.shift();
  }
  return result.join("");
};

console.error(multiply("123", "456"));

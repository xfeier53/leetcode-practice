/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
  let left = 0;
  let right = 1;
  let repetitive = 0;
  let max = 1;
  while (right < s.length) {
    if (s[right] === s[right - 1]) {
      left = repetitive;
      repetitive = right;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

console.error(longestSemiRepetitiveSubstring("0001"));

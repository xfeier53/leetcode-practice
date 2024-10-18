/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let num = map[char];
    if (i === s.length - 1) {
      result += num;
    } else {
      if (num < map[s.charAt(i + 1)]) {
        result -= num;
      } else {
        result += num;
      }
    }
  }
  return result;
};

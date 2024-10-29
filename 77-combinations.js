/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let func = (combination, rangeStart) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }
    for (let i = rangeStart; i <= n; i++) {
      combination.push(i);
      func(combination, i + 1);
      combination.pop();
    }
  };
  func([], 1);
  return result;
};

console.error(combine(3, 3));

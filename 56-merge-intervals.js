/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   let result = [];
//   intervals.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < intervals.length - 1; i++) {
//     if (intervals[i][1] < intervals[i + 1][0]) {
//       result.push(intervals[i]);
//       continue;
//     }
//     if (intervals[i][1] >= intervals[i + 1][0]) {
//       intervals[i + 1][0] = intervals[i][0];
//     }
//     if (intervals[i][1] > intervals[i + 1][1]) {
//       intervals[i + 1] = intervals[i];
//     }
//   }
//   result.push(intervals[intervals.length - 1]);
//   return result;
// };
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (result[result.length - 1][1] >= intervals[i][0]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
};

console.error(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

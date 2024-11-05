/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let count = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= points[i - 1][1]) {
      points[i][1] = Math.min(points[i - 1][1], points[i][1]);
    } else {
      count++;
    }
  }
  return count;
};

console.error(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);

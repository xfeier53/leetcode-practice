/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j < triangle[i - 1].length && j - 1 >= 0) {
        triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1]);
      } else if (j < triangle[i - 1].length) {
        triangle[i][j] += triangle[i - 1][j];
      } else {
        triangle[i][j] += triangle[i - 1][j - 1];
      }
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
};

console.error(minimumTotal([[-8], [3, -6], [5, 7, 1], [-9, 5, 0, -4], [-2, 4, -1, 1, 8]]));

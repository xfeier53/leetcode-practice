/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i >= 1 && j >= 1) {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      } else if (i >= 1) {
        grid[i][j] += grid[i - 1][j];
      } else if (j >= 1) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

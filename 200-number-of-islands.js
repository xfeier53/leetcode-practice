/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "0" || grid[i][j] === "2") {
        continue;
      }
      count++;
      let island = [[i, j]];
      while (island.length !== 0) {
        let point = island.pop();
        let x = point[0];
        let y = point[1];
        grid[x][y] = "2";
        if (x + 1 < grid.length && grid[x + 1][y] === "1") {
          island.push([x + 1, y]);
        }
        if (x - 1 >= 0 && grid[x - 1][y] === "1") {
          island.push([x - 1, y]);
        }
        if (y + 1 < grid[0].length && grid[x][y + 1] === "1") {
          island.push([x, y + 1]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] === "1") {
          island.push([x, y - 1]);
        }
      }
    }
  }
  return count;
};

console.error(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

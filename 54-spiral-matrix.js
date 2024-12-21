/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  // 0: up, 1: right, 2: down, 3: left
  let direction = 1;
  let position = [0, 0];
  const move = (position, direction) => {
    if (direction === 0) {
      return [position[0] - 1, position[1]];
    } else if (direction === 1) {
      return [position[0], position[1] + 1];
    } else if (direction === 2) {
      return [position[0] + 1, position[1]];
    } else {
      return [position[0], position[1] - 1];
    }
  };
  let wallThickness = Math.floor(direction / 4);
  let step = 0;
  while (step < matrix.length * matrix[0].length) {
    result[step] = matrix[position[0]][position[1]];
    let newPosition = move(position, direction % 4);
    if (
      (direction % 4 === 0 && newPosition[0] < 0 + wallThickness) ||
      (direction % 4 === 2 && newPosition[0] >= matrix.length - wallThickness) ||
      (direction % 4 === 1 && newPosition[1] >= matrix[0].length - wallThickness) ||
      (direction % 4 === 3 && newPosition[1] < 0 + wallThickness)
    ) {
      direction++;
      wallThickness = Math.floor(direction / 4);
      newPosition = move(position, direction % 4);
    }
    position = newPosition;
    step++;
  }
  return result;
};

console.error(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ])
);

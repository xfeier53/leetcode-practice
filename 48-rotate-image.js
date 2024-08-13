/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j = 0; j < Math.round(matrix.length / 2); j++) {
      let temp = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
      matrix[j][matrix.length - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};

var matrix = [
  ["00", "01", "02", "03", "04"],
  ["10", "11", "12", "13", "14"],
  ["20", "21", "22", "23", "24"],
  ["30", "31", "32", "33", "34"],
  ["40", "41", "42", "43", "44"],
];
rotate(matrix);
console.error(matrix);

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let verticalSet = new Array(9).fill().map(() => new Set());
  let squareSet = new Array(9).fill().map(() => new Set());
  for (let i = 0; i < 9; i++) {
    let horizontalSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (horizontalSet.has(board[i][j])) {
          return false;
        } else {
          horizontalSet.add(board[i][j]);
        }
        if (verticalSet[j].has(board[i][j])) {
          return false;
        } else {
          verticalSet[j].add(board[i][j]);
        }
        let squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (squareSet[squareIndex].has(board[i][j])) {
          return false;
        } else {
          squareSet[squareIndex].add(board[i][j]);
        }
      }
    }
  }
  return true;
};

console.error(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);

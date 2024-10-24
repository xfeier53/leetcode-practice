/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board[0].length - 1; j++) {
      if (board[i][j] === "O") {
        let collection = [[i, j]];
        let surrounded = true;
        let index = 0;
        while (index < collection.length) {
          let [x, y] = collection[index];
          if (x === 0 || x + 1 === board.length || y === 0 || y + 1 === board[0].length) {
            surrounded = false;
            break;
          }
          if (x - 1 >= 0 && board[x - 1][y] === "O") {
            collection.push([x - 1, y]);
            board[x - 1][y] = "Y";
          }
          if (x + 1 < board.length && board[x + 1][y] === "O") {
            collection.push([x + 1, y]);
            board[x + 1][y] = "Y";
          }
          if (y - 1 >= 0 && board[x][y - 1] === "O") {
            collection.push([x, y - 1]);
            board[x][y - 1] = "Y";
          }
          if (y + 1 < board[0].length && board[x][y + 1] === "O") {
            collection.push([x, y + 1]);
            board[x][y + 1] = "Y";
          }
          index++;
        }
        for (let l = 0; l < collection.length; l++) {
          let [x, y] = collection[l];
          board[x][y] = surrounded ? "X" : "O";
        }
      }
    }
  }
};

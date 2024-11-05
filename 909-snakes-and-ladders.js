/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let n = board.length;
  let set = new Set();
  let convert = (num) => {
    let row = Math.floor((num - 1) / n);
    let col = (num - 1) % n;
    col = row % 2 == 1 ? n - 1 - col : col;
    row = n - 1 - row;
    return [row, col];
  };
  let queue = [[1, 0]];
  while (queue.length) {
    let [num, count] = queue.shift();
    for (let i = 1; i <= 6; i++) {
      let next = num + i;
      let [x, y] = convert(num + i);
      if (board[x][y] !== -1) {
        next = board[x][y];
      }
      if (next === n * n) {
        return count + 1;
      }
      if (!set.has(next)) {
        set.add(next);
        queue.push([next, count + 1]);
      }
    }
  }
  return -1;
};

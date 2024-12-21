/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function (board, word) {
//   const direction = [
//     [1, 0],
//     [0, 1],
//     [-1, 0],
//     [0, -1],
//   ];
//   const isValid = (x, y) => {
//     return x >= 0 && y >= 0 && x < board[0].length && y < board.length;
//   };
//   for (let i = 0; i < board[0].length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const queue = [[i, j, 0, new Set()]];
//       while (queue.length > 0) {
//         const [x, y, charIndex, visited] = queue.shift();
//         if (board[y][x] !== word[charIndex]) {
//           continue;
//         }
//         if (charIndex === word.length - 1) {
//           return true;
//         }
//         visited.add(`${x}-${y}`);
//         for ([dx, dy] of direction) {
//           if (isValid(x + dx, y + dy) && !visited.has(`${x + dx}-${y + dy}`)) {
//             queue.push([x + dx, y + dy, charIndex + 1, new Set(visited)]);
//           }
//         }
//       }
//     }
//   }
//   return false;
// };

// var exist = function (board, word) {
//   const search = (x, y, charIndex, visited) => {
//     if (board[y][x] !== word[charIndex]) {
//       return false;
//     }
//     if (charIndex === word.length - 1) {
//       return true;
//     }
//     charIndex++;
//     visited[y][x] = true;
//     let result = false;
//     if (x - 1 >= 0 && !visited[y][x - 1]) {
//       result = result || search(x - 1, y, charIndex, visited);
//     }
//     if (x + 1 < board[0].length && !visited[y][x + 1]) {
//       result = result || search(x + 1, y, charIndex, visited);
//     }
//     if (y - 1 >= 0 && !visited[y - 1][x]) {
//       result = result || search(x, y - 1, charIndex, visited);
//     }
//     if (y + 1 < board.length && !visited[y + 1][x]) {
//       result = result || search(x, y + 1, charIndex, visited);
//     }
//     visited[y][x] = false;
//     return result;
//   };
//   for (let i = 0; i < board[0].length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const visited = new Array(board.length).fill().map(() => new Array(board[0].length).fill(false));
//       if (search(i, j, 0, visited)) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var exist = function (board, word) {
  const search = (x, y, charIndex) => {
    if (board[y][x] !== word[charIndex] || board[y][x] === 1) {
      return false;
    }
    if (charIndex === word.length - 1) {
      return true;
    }
    const original = board[y][x];
    board[y][x] = 1;
    const direction = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    for ([dx, dy] of direction) {
      if (x + dx >= 0 && y + dy >= 0 && x + dx < board[0].length && y + dy < board.length && search(x + dx, y + dy, charIndex + 1)) {
        return true;
      }
    }
    board[y][x] = original;
    return false;
  };
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

console.error(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);

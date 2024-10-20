/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   let map = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };
//   let result = [];
//   for (let i = 0; i < digits.length; i++) {
//     let char = digits[i];
//     let newResult = [];
//     for (let j = 0; j < map[char].length; j++) {
//       if (i === 0) {
//         newResult.push(map[char][j]);
//       } else {
//         for (let l = 0; l < result.length; l++) {
//           newResult.push(result[l] + map[char][j]);
//         }
//       }
//     }
//     result = newResult;
//   }
//   return result;
// };
var letterCombinations = function (digits) {
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    let char = digits[i];
    let tempResult = result;
    for (let j = 0; j < map[char].length - 1; j++) {
      result = [...result, ...tempResult];
    }
    for (let j = 0; j < map[char].length; j++) {
      if (i === 0) {
        result.push(map[char][j]);
      } else {
        for (let l = 0; l < tempResult.length; l++) {
          result[l + j * tempResult.length] += map[char][j];
        }
      }
    }
  }
  return result;
};

console.error(letterCombinations("23"));

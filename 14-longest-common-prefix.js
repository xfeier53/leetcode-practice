/**
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function (strs) {
//   strs.sort((s1, s2) => s1.length - s2.length);
//   let target = strs[0];
//   for (let i = 1; i < target.length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j].substring(0, i) !== target.substring(0, i)) {
//         return target.substring(0, i - 1);
//       }
//     }
//   }
//   return target;
// };

var longestCommonPrefix = function (strs) {
  strs.sort((s1, s2) => s1.length - s2.length);
  let target = strs[0];
  for (let i = 0; i < target.length; i++) {
    let targetChar = target.charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) !== targetChar) {
        return target.substring(0, i);
      }
    }
  }
  return target;
};

console.error(longestCommonPrefix(["flower", "flow", "flight"]));
console.error(longestCommonPrefix(["dog", "racecar", "car"]));
console.error(longestCommonPrefix(["a", "b"]));

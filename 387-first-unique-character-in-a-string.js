/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let array = new Array(26).fill(-2);
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let index = char.charCodeAt(0) - 97;
    if (array[index] !== -2) {
      array[index] = -1;
    } else {
      array[index] = i;
    }
  }
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1 && array[i] !== -2) {
      return array[i];
    }
  }

  return -1;
};

console.error(firstUniqChar("loveleetcode"));
console.error(firstUniqChar("aabb"));
console.error(firstUniqChar("z"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let array = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - 97]++;
    array[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.error(isAnagram("anagram", "nagaram"));
console.error(isAnagram("rat", "car"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let searchIndex = 0;
  for (let i = 0; i < s.length; i++) {
    let targetChar = s.charAt(i);
    let found = false;
    for (let j = searchIndex; j < t.length; j++) {
      if (t.charAt(j) === targetChar) {
        searchIndex = j + 1;
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
};

console.error(isSubsequence("axc", "ahbgdc"));

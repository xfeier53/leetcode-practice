/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      if (haystack.substring(i, needle.length + i) === needle) {
        return i;
      }
    }
  }
  return -1;
};

console.error(strStr("sadbutsad", "sad"));
console.error(strStr("leetcode", "leeto"));

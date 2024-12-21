/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = s.split(" ").filter(Boolean);
  return words[words.length - 1].length;
};

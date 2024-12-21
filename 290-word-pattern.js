/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) {
    return false;
  }
  const wordPerPattern = new Map();
  const mappedValues = new Set();
  for (let i = 0; i < pattern.length; i++) {
    if (!wordPerPattern.has(pattern[i])) {
      wordPerPattern.set(pattern[i], words[i]);
      if (mappedValues.has(words[i])) {
        return false;
      }
      mappedValues.add(words[i]);
    } else if (wordPerPattern.get(pattern[i]) !== words[i]) {
      return false;
    }
  }
  return true;
};

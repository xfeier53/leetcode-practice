/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let collection = [s];
  let history = new Set();
  while (collection.length) {
    if (history.has(collection[0])) {
      collection.shift();
      continue;
    }
    for (let j = 0; j < wordDict.length; j++) {
      if (collection[0].substring(0, wordDict[j].length) === wordDict[j]) {
        if (collection[0].length === wordDict[j].length) {
          return true;
        }
        collection.push(collection[0].substring(wordDict[j].length, collection[0].length));
      }
    }
    history.add(collection[0]);
    collection.shift();
  }
  return false;
};

console.error(wordBreak("abcd", ["a", "abc", "b", "cd"]));

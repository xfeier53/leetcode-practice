/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const changeMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (changeMap.has(s[i]) && changeMap.get(s[i]) !== t[i]) {
      return false;
    }
    changeMap.set(s[i], t[i]);
  }
  const mappedValues = Array.from(changeMap.values());
  if (mappedValues.length !== new Set(mappedValues).size) {
    return false;
  }
  return true;
};

console.error(isIsomorphic("paper", "title"));
console.error(isIsomorphic("badc", "baba"));

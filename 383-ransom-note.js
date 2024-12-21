/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const count = magazineMap.get(magazine[i]) || 0;
    magazineMap.set(magazine[i], count + 1);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const count = magazineMap.get(ransomNote[i]);
    if (!count || count < 1) {
      return false;
    }
    magazineMap.set(ransomNote[i], count - 1);
  }
  return true;
};

console.error(canConstruct("dehifb", "hhjdgjbhahaagihhhhhajjibjffhijehda"));

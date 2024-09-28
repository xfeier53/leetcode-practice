/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowercaseS = s.toLowerCase();
  let filteredS = "";
  for (let i = 0; i < lowercaseS.length; i++) {
    if ((lowercaseS.charCodeAt(i) >= 97 && lowercaseS.charCodeAt(i) <= 122) || (lowercaseS.charCodeAt(i) >= 48 && lowercaseS.charCodeAt(i) <= 57)) {
      filteredS += lowercaseS.charAt(i);
    }
  }
  for (let i = 0; i < filteredS.length; i++) {
    if (filteredS.charAt(i) !== filteredS.charAt(filteredS.length - i - 1)) {
      return false;
    }
  }
  return true;
};

console.error(isPalindrome("A man, a plan, a canal: Panama"));
console.error(isPalindrome("race a car"));
console.error(isPalindrome(" "));
console.error(isPalindrome("ab_a"));

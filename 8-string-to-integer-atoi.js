/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let number = "";
  let leadingSpace = true;
  let negative = false;
  let startFindChar = false;
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (char === " " && leadingSpace) {
      continue;
    } else {
      leadingSpace = false;
    }
    if (!startFindChar && (char === "-" || char === "+")) {
      negative = char === "-";
      startFindChar = true;
      continue;
    }
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      startFindChar = true;
      number += char;
    } else if (startFindChar) {
      break;
    } else {
      return 0;
    }
  }
  if (number === "") {
    return 0;
  }
  let result = negative ? -parseInt(number) : parseInt(number);
  let limit = Math.pow(2, 31);
  if (result >= limit - 1) {
    return limit - 1;
  }
  if (result < -limit) {
    return -limit;
  }
  return result;
};

console.error(myAtoi("1337c0d3"));
console.error(myAtoi(" -042"));
console.error(myAtoi("words and 987"));
console.error(myAtoi(""));

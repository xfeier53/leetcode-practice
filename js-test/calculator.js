// Input: “5 * 4 + 1”
// Output: “5 * 4 + 1 = 21”

const findSubString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (str[i] === "(") {
      let right = str.length - 1;
      while (right > i) {
        if (str[right] === " ") {
          right--;
          continue;
        }
        if (str[right] === ")") {
          return [i + 2, right - 2];
        }
        right--;
      }
    }
  }
  return [0, str.length - 1];
};

const calculate = (str) => {
  let result = 0;
  let prev = 0;
  let sign = "+";
  const parts = str.split(" ");

  for (let i = 0; i < parts.length; i++) {
    if (!isNaN(parts[i])) {
      const number = parseFloat(parts[i]);
      if (sign === "+") {
        result += number;
        prev = number;
      } else if (sign === "-") {
        result -= number;
        prev = -number;
      } else if (sign === "*") {
        result -= prev;
        result += prev * number;
        prev = prev * number;
      } else {
        result -= prev;
        result += prev / number;
        prev = prev / number;
      }
    } else {
      sign = parts[i];
    }
  }
  return result;
};

const calculateWithBracket = (str) => {
  let newStr = str;
  while (true) {
    const [left, right] = findSubString(newStr);
    if (newStr.length - 1 === right - left) {
      return calculate(newStr);
    }
    const result = calculateWithBracket(str.substring(left, right + 1));
    const strArr = str.split("");
    strArr.splice(left - 2, right - left + 5, result.toString());
    newStr = strArr.join("");
  }
};

// console.log(calculate("20 + 50.5 * 5 / 10 - 10"));
// console.log(calculate("20 + 50 * 5 / 10 - 10"));
// console.log(calculate("20 - 50 * 5 / 10 - 10"));
// console.log(findSubString("20 - 50 * ( 5 - 3 + ( 2 - 1 ) ) / 10 - 10"));
// console.log(findSubString("5 - 3 + ( 2 - 1 )"));

// console.log(calculate("20 + 50.5 * 5 / 10 - 10"));
// console.log(calculate("20 + 50 * 5 / 10 - 10"));
// console.log(calculate("20 - 50 * 5 / 10 - 10"));
// console.log(calculateWithBracket("20 - 50 * ( 5 - 3 ) / 10 - 10"));
console.log(calculateWithBracket("20 - 50 * ( 5 - 3 + ( 2 - 1 ) ) / 10 - 10"));

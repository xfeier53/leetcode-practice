/**
 * @param {string} s
 * @return {number}
 */
// var calculate = function (s) {
//   const stack = [];
//   const calc = (a, b, sign) => {
//     if (sign === "+") return a + b;
//     if (sign === "-") return a - b;
//     if (sign === "*") return a * b;
//     if (sign === "/") return Math.floor(a / b);
//   };
//   const isDigit = (str) => !isNaN(str);

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       continue;
//     }
//     // current item is a sign
//     if (!isDigit(s[i])) {
//       stack.push(s[i]);
//       continue;
//     }
//     let newNumber = parseInt(s[i]);
//     // current item is a number
//     while (i + 1 < s.length && isDigit(s[i + 1])) {
//       newNumber = newNumber * 10 + parseInt(s[i + 1]);
//       i++;
//     }
//     const lastItem = stack[stack.length - 1];
//     // last item is a number
//     if (isDigit(lastItem)) {
//       stack.push(newNumber);
//       continue;
//     }
//     // last item is a sign and it is * or /
//     if (lastItem === "*" || lastItem === "/") {
//       const sign = stack.pop();
//       const leftOperand = stack.pop();
//       const result = calc(leftOperand, newNumber, sign);
//       stack.push(result);
//       continue;
//     }
//     // last item is a sign and it is + or -
//     stack.push(newNumber);
//   }
//   while (stack.length !== 1) {
//     const left = stack.shift();
//     const sign = stack.shift();
//     const right = stack.shift();
//     const result = calc(left, right, sign);
//     stack.unshift(result);
//   }
//   return stack[0];
// };
var calculate = function (s) {
  let result = 0;
  let prev = 0;
  let i = 0;
  let operation = "+";
  while (i < s.length) {
    if (s[i] === " ") {
      i++;
      continue;
    }
    if (isNaN(s[i])) {
      operation = s[i];
      i++;
      continue;
    }
    let number = parseInt(s[i]);
    while (i + 1 < s.length && !isNaN(s[i + 1]) && s[i + 1] !== " ") {
      number = number * 10 + parseInt(s[i + 1]);
      i++;
    }
    if (operation === "+") {
      result += number;
      prev = number;
    } else if (operation === "-") {
      result -= number;
      prev = -number;
    } else if (operation === "*") {
      result -= prev;
      result += prev * number;
      prev = prev * number;
    } else if (operation === "/") {
      result -= prev;
      result += Math.trunc(prev / number);
      prev = Math.trunc(prev / number);
    }
    i++;
  }
  return result;
};

// console.error(calculate(" 3/2 "));
console.error(calculate("14-3/2"));
// console.error(calculate("1-1+1"));

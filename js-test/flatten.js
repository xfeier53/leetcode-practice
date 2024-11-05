// function flatten(value) {
//   const result = [];
//   let func = (value, result) => {
//     if (Array.isArray(value)) {
//       value.forEach((item) => func(item, result));
//     } else {
//       result.push(value);
//     }
//     return result;
//   };
//   return func(value, result);
// }

function flatten(value) {
  return value.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);
}

flatten([]);

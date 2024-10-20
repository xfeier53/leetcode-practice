/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let func = (numRows, collection) => {
    if (numRows === 1) {
      collection.push([1]);
      return;
    }
    func(numRows - 1, collection);
    let lastRow = collection[numRows - 2];
    let thisRow = [1];
    for (let i = 0; i < lastRow.length - 1; i++) {
      thisRow.push(lastRow[i] + lastRow[i + 1]);
    }
    thisRow.push(1);
    collection.push(thisRow);
  };
  let collection = [];
  func(numRows, collection);
  return collection;
};

console.error(generate(5));

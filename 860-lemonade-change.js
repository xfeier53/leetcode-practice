/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveDollarBills = 0;
  let tenDollarBills = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fiveDollarBills++;
      continue;
    }
    if (bills[i] === 10) {
      fiveDollarBills--;
      tenDollarBills++;
    }
    if (bills[i] === 20) {
      if (tenDollarBills) {
        tenDollarBills--;
        fiveDollarBills--;
      } else {
        fiveDollarBills -= 3;
      }
    }
    if (fiveDollarBills < 0 || tenDollarBills < 0) {
      return false;
    }
  }
  return true;
};

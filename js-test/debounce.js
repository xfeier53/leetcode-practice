function debounce(func, wait) {
  let timeout = null;
  function debouncedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }
    // timeout = setTimeout(() => func.apply(this, args), wait);
    timeout = setTimeout(func.bind(this), wait, ...args);
  }
  return debouncedFunc;
}

const increment = debounce(function (delta) {
  this.val += delta;
}, 10);

const obj = {
  val: 2,
  increment,
};

console.error(obj.val); // 2
obj.increment(3);
obj.increment(3);
obj.increment(3);
obj.increment(3);
console.error(obj.val); // 2

setTimeout(() => {
  console.error(obj.val); // 5
}, 20);

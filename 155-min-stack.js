var MinStack = function () {
  this.current = -1;
  this.min = -1;
  this.stack = [];
  this.previousMinIndex = -1;
  this.previousMin = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.current++;
  if (this.min === -1) {
    this.min = this.current;
  } else if (val < this.stack[this.min]) {
    this.previousMinIndex++;
    if (this.previousMin.length - 1 < this.previousMinIndex) {
      this.previousMin.push(this.min);
    } else {
      this.previousMin[this.previousMinIndex] = this.min;
    }
    this.min = this.current;
  }

  if (this.stack.length - 1 < this.current) {
    this.stack.push(val);
  } else {
    this.stack[this.current] = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.current === this.min) {
    if (this.previousMinIndex === -1) {
      this.min = -1;
    } else {
      this.min = this.previousMin[this.previousMinIndex];
      this.previousMinIndex--;
    }
  }
  this.current--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.current];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.min];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
obj.top();
obj.pop();
obj.getMin();
obj.pop();
obj.getMin();
obj.pop();
obj.push(2147483647);
obj.top();
var param_3 = obj.top();
var param_4 = obj.getMin();

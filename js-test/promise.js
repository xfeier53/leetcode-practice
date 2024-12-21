function MyPromise(executor) {
  let state = "pending";
  let value;
  let queue = [];

  function resolve(result) {
    if (state === "pending") {
      state = "fulfilled";
      value = result;
      executeQueue();
    }
  }

  function reject(error) {
    if (state === "pending") {
      state = "rejected";
      value = error;
      executeQueue();
    }
  }

  function executeQueue() {
    queue.forEach((task) => {
      if (state === "fulfilled" && task.onFulfilled) {
        try {
          task.nextResolve(task.onFulfilled(value));
        } catch (error) {
          task.nextReject(error);
        }
      } else if (state === "rejected" && task.onRejected) {
        try {
          task.nextResolve(task.onRejected(value));
        } catch (error) {
          task.nextReject(error);
        }
      }
    });
    queue = [];
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }

  this.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (error) => {
            throw error;
          };

    return new MyPromise((nextResolve, nextReject) => {
      queue.push({ onFulfilled, onRejected, nextResolve, nextReject });
      if (state !== "pending") {
        executeQueue();
      }
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };
}

// Static methods remain the same as before
// Static methods
MyPromise.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      MyPromise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      MyPromise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

MyPromise.resolve = function (value) {
  if (value instanceof MyPromise) {
    return value;
  }

  return new MyPromise((resolve) => resolve(value));
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason));
};
// Assuming your custom Promise is named `MyPromise`

// Test 1: Basic Promise Resolution
console.log("Test 1: Basic Promise Resolution");
new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("resolved"), 100);
}).then((result) => {
  console.log(result === "resolved" ? "PASS" : "FAIL");
});

// Test 2: Promise Rejection
console.log("\nTest 2: Promise Rejection");
new MyPromise((resolve, reject) => {
  setTimeout(() => reject(new Error("rejected")), 100);
}).catch((error) => {
  console.log(error.message === "rejected" ? "PASS" : "FAIL");
});

// Test 3: Chaining Promises
console.log("\nTest 3: Chaining Promises");
new MyPromise((resolve, reject) => {
  resolve(1);
})
  .then((value) => {
    return new MyPromise((resolve, reject) => {
      resolve(value + 1);
    });
  })
  .then((value) => {
    console.log(value === 2 ? "PASS" : "FAIL");
  });

// Test 4: Multiple `.then()` handlers
console.log("\nTest 4: Multiple .then() handlers");
let count = 0;
new MyPromise((resolve, reject) => {
  resolve("value");
})
  .then(() => {
    count++;
  })
  .then(() => {
    console.log(count === 1 ? "PASS" : "FAIL");
  })
  .then(() => {
    count++;
  })
  .then(() => {
    console.log(count === 2 ? "PASS" : "FAIL");
  });

// Test 5: Promise.all
console.log("\nTest 5: Promise.all");
const promises = [
  new MyPromise((resolve) => setTimeout(() => resolve(1), 100)),
  new MyPromise((resolve) => setTimeout(() => resolve(2), 200)),
  new MyPromise((resolve) => setTimeout(() => resolve(3), 50)),
];

MyPromise.all(promises).then((results) => {
  console.log(JSON.stringify(results) === JSON.stringify([1, 2, 3]) ? "PASS" : "FAIL");
});

// Test 6: Promise.race
console.log("\nTest 6: Promise.race");
const racePromises = [
  new MyPromise((resolve) => setTimeout(() => resolve(1), 100)),
  new MyPromise((resolve) => setTimeout(() => resolve(2), 50)),
  new MyPromise((resolve) => setTimeout(() => resolve(3), 200)),
];

MyPromise.race(racePromises).then((result) => {
  console.log(result === 2 ? "PASS" : "FAIL");
});

// Test 7: Error Handling with `.catch()`
console.log("\nTest 7: Error Handling with .catch()");
new MyPromise((resolve, reject) => {
  reject(new Error("rejected"));
}).catch((error) => {
  console.log(error.message === "rejected" ? "PASS" : "FAIL");
});

// Test 8: Promise chaining with errors
console.log("\nTest 8: Promise chaining with errors");
new MyPromise((resolve, reject) => {
  resolve(1);
})
  .then((value) => {
    return new MyPromise((resolve, reject) => {
      reject(new Error("chain error"));
    });
  })
  .catch((error) => {
    console.log(error.message === "chain error" ? "PASS" : "FAIL");
  });

// Test 9: Promise resolution with non-promise values
console.log("\nTest 9: Promise resolution with non-promise values");
new MyPromise((resolve, reject) => {
  resolve(42);
}).then((value) => {
  console.log(value === 42 ? "PASS" : "FAIL");
});

// Test 10: Promise should be executed only once
console.log("\nTest 10: Promise should be executed only once");
count = 0;
const promise = new MyPromise((resolve, reject) => {
  count++;
  resolve("once");
});

promise
  .then(() => {
    console.log(count === 1 ? "PASS" : "FAIL");
  })
  .then(() => {
    console.log(count === 1 ? "PASS" : "FAIL");
  });

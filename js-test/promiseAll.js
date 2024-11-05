function promiseAll(iterable) {
  return new Promise(async (resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
    }
    const result = new Array(iterable.length);
    let count = 0;
    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((data) => {
          result[index] = data;
          if (count === iterable.length - 1) {
            resolve(result);
          }
          count++;
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// function deepClone(value) {
//   return JSON.parse(JSON.stringify(value));
// }

function deepClone(value) {
  if (value === null || value === undefined || typeof value === "boolean" || typeof value === "number" || typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }
  if (typeof value === "object") {
    const newObject = {};
    Object.entries(value).forEach(([key, value]) => {
      newObject[key] = deepClone(value);
    });
    return newObject;
  }
}

deepClone("foo") === "foo";
deepClone(123) === 123;

const obj = { role: "foo" };
const clonedObj = deepClone(obj);
clonedObj.role = "bar";
obj.role === "foo";

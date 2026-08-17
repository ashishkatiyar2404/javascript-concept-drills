// Q -
const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function flattenObject(data, prefix = "", result = {}) {
  for (let key in data) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof data[key] === "object" && obj[key] !== null) {
      flattenObject(data[key], newKey, result);
    } else {
      result[newKey] = data[key];
    }
  }
  return result;
}

console.log(flattenObject(obj));

// const output =
// {
//     "A": "12",
//     "B": 23,
//     "C.P": 23,
//     "C.O.L": 56,
//     "C.Q.0": 1,
//     "C.Q.1": 2
// }

const input = {
  a: 1,
  b: [2, 3, { c: 4, d: [5, 6] }],
  e: { f: 7, g: [8, { h: 9 }] },
};

// Expected flattened output:
// {
//   "a": 1,
//   "b.0": 2,
//   "b.1": 3,
//   "b.2.c": 4,
//   "b.2.d.0": 5,
//   "b.2.d.1": 6,
//   "e.f": 7,
//   "e.g.0": 8,
//   "e.g.1.h": 9
// }

// Solution 1
function recurse(value, currentPath, result) {
  if (typeof value !== "object" && !Array.isArray(value)) {
    result[currentPath] = value;
    return;
  }

  // otherwise, value IS an object or array — NOW loop over it
  for (let key in value) {
    const newPath = currentPath ? `${currentPath}.${key}` : key;
    recurse(value[key], newPath, result);
  }
  return result;
}
console.log(recurse(input, "", {}));

//Solution 2
function recurse(value, currentPath, result) {
  for (let key in value) {
    const newKey = currentPath ? `${currentPath}.${key}` : key;
    if (typeof value[key] === "object") {
      recurse(value[key], newKey, result);
    } else {
      result[newKey] = value[key];
    }
  }
  return result;
}
console.log(recurse(input, "", {}));

// Solution 3
function recurse(value, currentPath, result) {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const newPath = currentPath ? `${currentPath}.${i}` : `${i}`;
      recurse(value[i], newPath, result);
    }
  } else if (typeof value === "object" && value !== null) {
    for (let key in value) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      recurse(value[key], newPath, result);
    }
  } else {
    result[currentPath] = value;
  }
  return result;
}
console.log(recurse(input, "", {}));

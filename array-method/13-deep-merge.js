/**
 * Q13: Deep merge two objects — nested objects merge recursively,
 * arrays are fully replaced (not merged), and obj2's primitives win on conflict.
 * Input:  deepMerge({a:1, b:{x:1,y:2}}, {b:{y:3,z:4}, c:5})
 * Output: {a:1, b:{x:1,y:3,z:4}, c:5}
 */

// NOTE: This code can work for input(one level of nested but when it comes to deep level thn it failed)
// SOLUTION 1
function deepMerge(obj1, obj2) {
  let mergeObj = {};

  mergeObj = { ...obj1 };

  for (let key in obj2) {
    if (typeof obj2[key] === "object") {
      mergeObj[key] = {
        ...mergeObj[key],
        ...obj2[key],
      };
    } else {
      mergeObj[key] = obj2[key];
    }
  }

  return mergeObj;
}

console.log(
  deepMerge({ a: 1, b: { x: 1, y: 2 } }, { b: { y: 3, z: 4 }, c: 5 }),
);

// SOLUTION 2 for DEEP merge
function isObject(val) {
  return val !== null && typeof val === "object" && !Array.isArray(val);
}

function deepMerge(obj1, obj2) {
  let result = { ...obj1 };

  for (let key in obj2) {
    if (isObject(obj2[key]) && isObject(result[key])) {
      //  order matters here while calling deepMerge again
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}
console.log(
  deepMerge({ a: { x: { p: 1, q: 2 } } }, { a: { x: { q: 3, r: 4 } } }),
);

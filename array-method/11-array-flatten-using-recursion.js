/**
 * Q11: Flatten an array of ARBITRARY nesting depth using recursion.
 * Input:  [1, [2, [3, [4, 5]], 6], 7]
 * Output: [1, 2, 3, 4, 5, 6, 7]
 */

function flattenDeep(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenDeep(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenDeep(arr));

// Q  -: Flatten AND filter in one pass
const nested = [1, [2, 3, "skip"], [4, [5, "skip", 6]], "skip"];

function flattenAndClean(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenAndClean(arr[i], result);
    } else {
      if (arr[i] !== "skip") {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(flattenAndClean(nested));

// Q - Flatten objects too (not just arrays) — deeply nested mixed structures
const data = [1, { a: 2, b: [3, 4] }, [5, { c: 6, d: [7, 8] }]];
// output
// [1, 2, 3, 4, 5, 6, 7, 8]
function flattenAll(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenAll(arr[i], result);
    } else if (arr[i] !== null && typeof arr[i] === "object") {
      flattenAll(Object.values(arr[i]), result);
    } else {
      if (arr[i] !== undefined) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(flattenAll(data));

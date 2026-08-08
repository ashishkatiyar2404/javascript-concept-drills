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

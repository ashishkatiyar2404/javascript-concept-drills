/**
 * Q12: Flatten an array up to a given depth (mimic Array.prototype.flat(depth)).
 * Input:  flattenWithDepth([1, [2, [3, [4, 5]], 6], 7], 1)
 * Output: [1, 2, [3, [4, 5]], 6, 7]
 *
 * Input:  flattenWithDepth([1, [2, [3, [4, 5]], 6], 7], 2)
 * Output: [1, 2, 3, [4, 5], 6, 7]
 *
 * Input:  flattenWithDepth([1, [2, [3, [4, 5]], 6], 7], Infinity)
 * Output: [1, 2, 3, 4, 5, 6, 7]
 */

function flattenWithDepth(arr, depth = 1, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      flattenWithDepth(arr[i], depth - 1, result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenWithDepth(arr, 1));

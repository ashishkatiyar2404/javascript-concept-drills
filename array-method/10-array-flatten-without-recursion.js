const input = [1, [2, 3], 4, [5, 6]];
/**
 * [1, 2, 3, 4, 5, 6]
 *  */
function flattenOnce(arr) {
  const result = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      //acc = [...acc, ...curr]; // 🔸 spread — creates a brand NEW array each time
      acc.push(...curr); // spread curr's items as individual push args
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
  return result;
}
console.log(flattenOnce(arr));

// NOTE -   acc.push(...curr); This mutates acc in place (O(1) amortized per push) instead of rebuilding the whole array. Same result, better performance habit.

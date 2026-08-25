// Given an integer array nums and an integer val, remove all occurrences of val in-place.
let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let value = 2;

// Approch - Use pointer 'x' to track where the next non-val element should go.
function removeElement(arr) {
  let positionPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[positionPointer] = arr[i];
      positionPointer++;
    }
  }
  return arr.slice(0, positionPointer + 1);
}

console.log(removeElement(arr));

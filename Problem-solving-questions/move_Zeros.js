// Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

// Note:You must do this in-place without making a copy of the array.

let nums = [0, 1, 0, 3, 12];

function moveZeros(arr) {
  let positionPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[positionPointer] = arr[i];
      positionPointer++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(moveZeros(nums));

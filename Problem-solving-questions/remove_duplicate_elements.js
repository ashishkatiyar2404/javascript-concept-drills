let array = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6];

// using two pointer
// positionPointer is maintaining the position where we need to shift
function removeDuplicate(array) {
  let positionPointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[positionPointer]) {
      positionPointer = positionPointer + 1;
      array[positionPointer] = array[i];
    }
  }
  // 'positionPointer + 1' - becoz we start from 0
  return array.slice(0, positionPointer + 1);
}

console.log(removeDuplicate(array));

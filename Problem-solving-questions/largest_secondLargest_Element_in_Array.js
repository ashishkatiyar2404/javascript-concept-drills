const array = [2, 4, 6, 8, 9, 3, 5];

// Largest
function largestNumber(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
console.log(largestNumber(array));

// secondLargestNumber
function secondLargestNumber(array) {
  let largest = -Infinity;
  let largest2 = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest2 = largest;
      largest = array[i];
    } else if (array[i] > largest2 && array[i] !== largest) {
      largest2 = array[i];
    }
  }

  return largest2;
}
console.log(secondLargestNumber(array));

const array = [2, 4, 6, 8, 9, 3, 5];

function smallestNumber(array) {
  let smallest = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}

console.log(smallestNumber(array));

function secondSmallestNumber(array) {
  let smallest = Infinity;
  let smallest2 = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest2 = smallest;
      smallest = array[i];
    } else if (array[i] < smallest2 && array[i] !== smallest) {
      smallest2 = array[i];
    }
  }
  return smallest2;
}

console.log(secondSmallestNumber(array));

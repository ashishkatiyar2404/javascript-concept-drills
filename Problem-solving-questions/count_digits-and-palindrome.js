let num = 23874892749;

function countDigits(num) {
  // corner case
  if (num === 0) return 1;

  num = Math.abs(num); // for -ve numbers

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let result = countDigits(num);
console.log(result);

function palindrome(num) {
  let result = 0;

  while (num > 0) {
    let remainder = num % 10;
    result = result * 10 + remainder;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(palindrome(num));

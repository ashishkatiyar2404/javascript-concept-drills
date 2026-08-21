// Concept: You're implementing .reduce() yourself

//Solution 1
Array.prototype.myReduce = function (cbFunction, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cbFunction(acc, this[i], i, this) : this[i];
  }

  return acc;
};
//Edge Case - [2, 0, 4].myReduce((a, b) => a * b)
// Our code gives: 4
// Correct answer: 0

// Solution 2 - Efficient
Array.prototype.myReduce = function (cbFunction, initialValue) {
  // Edge case if -
  // 1- [].myReduce((a, b) => a + b)          // empty array, no initial value
  // 2 - [].myReduce((a, b) => a + b, 100)   // empty array, WITH an initial value
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("TypeError: Reduce of empty array with no initial value");
  }

  let acc;
  let startIndex;

  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    acc = cbFunction(acc, this[i], i, this);
  }
  return acc;
};

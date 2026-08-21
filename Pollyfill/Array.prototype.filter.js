// Concept: You're implementing .filter() yourself

Array.prototype.myFilter = function (cbFunc) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cbFunc(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Solution 2
Array.prototype.myFilter = function (cbFunc, thisArg) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cbFunc.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

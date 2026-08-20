// Concept: You're implementing .map() yourself

Array.prototype.myMap = function (cbFunction) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // cbFunction(element, index, array)
    result.push(cbFunction(this[i], i, this));
  }
  return result;
};

// NOTE - What's missing (the follow-up gotchas an interviewer will hit you with)
// No thisArg support — native map accepts a second argument to set this inside the callback
// NOTE - What is thisArg  - A value to use as this when executing callbackFn

// arr.map(function(x) { return x * this.multiplier }, { multiplier: 2 })

Array.prototype.myMap = function (cbFunction, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // cbFunction(element, index, array)
    result.push(cbFunction.call(thisArg, this[i], i, this));
  }
  return result;
};

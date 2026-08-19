// Concept: You're implementing .map() yourself

Array.prototype.myMap = function (cbFunction) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // cbFunction(element, index, array)
    result.push(cbFunction(this[i], i, this));
  }
  return result;
};

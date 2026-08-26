// Concept: You're implementing .forEach() yourself

Array.prototype.myForEach = function (cbFunc, thisArg) {
  for (let i = 0; i < this.length; i++) {
    cbFunc.call(thisArg, this[i], i, this);
  }
};

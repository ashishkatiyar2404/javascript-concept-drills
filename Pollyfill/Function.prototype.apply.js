// Concept: You're implementing .apply() yourself
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " its not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-array method");
  }

  context.fn = this;
  let temp = context.fn(...args);
  delete context.fn;

  return temp;
};

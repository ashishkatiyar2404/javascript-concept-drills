// Concept: You're implementing .call() yourself

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " its not callable");
  }

  context.fn = this;
  let temp = context.fn(...args);
  delete context.fn;
  return temp;
};

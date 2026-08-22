// Concept: You're implementing .bind() yourself

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " cannot be bound as its not callable");
  }

  const fn = this;

  return function (...newArgs) {
    context.fn = fn;
    let temp = context.fn(...args, ...newArgs);
    delete context.fn;
    return temp;
  };
};

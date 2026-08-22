// Why do we need a compose function?
function double(x) {
  return x * 2;
}
function addOne(x) {
  return x + 1;
}
function square(x) {
  return x * x;
}
function subtractThree(x) {
  return x - 3;
}

// we could do
const result = subtractThree(square(addOne(double(5))));
// This gets ugly pretty quickly.

// We want something like -
const process = compose(subtractThree, square, addOne, double);
console.log(process(5));

// MAKING OUR OWN COMPOSE
// Solution 1 (with in-build)
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}

// Solution 2
function compose(...functions) {
  return function (value) {
    let result = value;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

// PIPE
// Solution 1
function pipe(...fns) {
  return function (value) {
    return fns.reduce((acc, curr) => curr(value), value);
  };
}

// Solution 2
function pipe(...fns) {
  return function (value) {
    let result = value;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

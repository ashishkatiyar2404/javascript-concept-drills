function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // cancel whatever was pending before

    // schedule a fresh one
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let coolDown = false;

  return function (...args) {
    if (!coolDown) {
      fn(...args);
      coolDown = true;
      setTimeout(() => {
        coolDown = false;
      }, delay);
    }
  };
}

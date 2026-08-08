/**
 * Given cart = [{item,price,qty}, ...], use .reduce() to get total cart value (price × qty summed)
 */

const cart = [
  { item: "Pen", price: 10, qty: 3 },
  { item: "Notebook", price: 50, qty: 2 },
];

/**
 * Expected output: 130
 */

const result = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
console.log(result);

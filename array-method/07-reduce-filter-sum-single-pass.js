/**
 * Given orders = [{id,status,amount}, ...], use a single .reduce() (no separate .filter()) to sum amount of only "completed" orders
 */
const orders = [
  { id: 1, status: "completed", amount: 500 },
  { id: 2, status: "cancelled", amount: 300 },
  { id: 3, status: "completed", amount: 700 },
  { id: 4, status: "pending", amount: 200 },
];

/**
 * 1200
 */

const result = orders.reduce((acc, curr) => {
  if (curr.status === "completed") {
    acc = acc + curr.amount;
  }
  return acc;
}, 0);
console.log(result);

/**
 * Given orders = [{id,amount}, ...], use .map() to add a tier field: "Gold" if amount >= 1000, else "Silver"
 */

const orders = [
  { id: 1, amount: 1200 },
  { id: 2, amount: 300 },
  { id: 3, amount: 5000 },
];

/**
 * 
 * [
  { id: 1, amount: 1200, tier: "Gold" },
  { id: 2, amount: 300, tier: "Silver" },
  { id: 3, amount: 5000, tier: "Gold" },
]
 */
const result = orders.map((order) => ({
  ...order,
  tier: order.amount >= 1000 ? "Gold" : "Silver",
}));
console.log(result);

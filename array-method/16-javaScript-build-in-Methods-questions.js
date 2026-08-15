// input
const products = [
  { id: 1, name: "Pen", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Notebook", inStock: true },
  { id: 4, name: "Phone", inStock: false },
];
// output - build an object indexed by id, but include only the products that are inStock: true.
// {
//   1: { id: 1, name: "Pen", inStock: true },
//   3: { id: 3, name: "Notebook", inStock: true },
// }

const result = products
  .filter((prod) => prod.inStock === true)
  .reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////
// Q - input
const sales = [
  { region: "North", product: "Pen", amount: 100 },
  { region: "South", product: "Pen", amount: 150 },
  { region: "North", product: "Laptop", amount: 5000 },
  { region: "South", product: "Laptop", amount: 6000 },
  { region: "North", product: "Pen", amount: 50 },
];

// output
// {
//   North: 5150,   // 100 + 5000 + 50
//   South: 6150,   // 150 + 6000
// }

const salesResult = sales.reduce((acc, curr) => {
  acc[curr.region] = (acc[curr.region] || 0) + curr.amount;

  return acc;
}, {});

///////////////////////////////////////////////////////////////////////////////////////////
//Q -  input
const orders = [
  { region: "North", category: "Electronics", amount: 100 },
  { region: "South", category: "Electronics", amount: 200 },
  { region: "North", category: "Furniture", amount: 300 },
  { region: "North", category: "Electronics", amount: 150 },
  { region: "South", category: "Furniture", amount: 400 },
];
// output
// {
//   "North-Electronics": 250,   // 100 + 150
//   "South-Electronics": 200,
//   "North-Furniture": 300,
//   "South-Furniture": 400,
// }

const ordersResult = orders.reduce((acc, curr) => {
  const key = `${curr.region}-${curr.category}`;
  acc[key] = (acc[key] || 0) + curr.amount;

  return acc;
}, {});

///////////////////////////////////////////////////////////////////////////////////////////

// Q - input
const logs = [
  { level: "error", message: "DB connection failed" },
  { level: "info", message: "Server started" },
  { level: "error", message: "Timeout on request" },
  { level: "warn", message: "Deprecated API used" },
  { level: "info", message: "User logged in" },
];
// output
/**
{
  error: ["DB CONNECTION FAILED", "TIMEOUT ON REQUEST"],
  info: ["SERVER STARTED", "USER LOGGED IN"],
  warn: ["DEPRECATED API USED"],
}
  */

const resultLogs = logs.reduce((acc, curr) => {
  const level = curr.level;
  // bad approach
  //   acc[level] = [...acc[level] || "", curr.message.toUpperCase()];

  // good approach
  // acc[key] = acc[key] || [] + .push() ----> shorthand of below 2 lines
  acc[level] = acc[level] || [];
  acc[level].push(curr.message.toUpperCase());

  return acc;
}, {});

console.log(resultLogs);

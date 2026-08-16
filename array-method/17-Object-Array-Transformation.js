// Concept: Backend APIs often send data in a shape that's inconvenient for the frontend to use directly. A very common interview task is: "reshape this API response into something React can render/use easily." This uses map, reduce, and sometimes both together — but the thinking is different: you're not just transforming values, you're redesigning the structure of the data.

// Q1
const apiResponse = {
  Engineering: [
    { name: "Alice", role: "Frontend" },
    { name: "Bob", role: "Backend" },
  ],
  Sales: [{ name: "Charlie", role: "AE" }],
};
// output
// [
//   { name: "Alice", role: "Frontend", dept: "Engineering" },
//   { name: "Bob", role: "Backend", dept: "Engineering" },
//   { name: "Charlie", role: "AE", dept: "Sales" },
// ]

// Solution
const apiResponseResult = Object.keys(apiResponse).reduce((acc, curr) => {
  const addingDeptField = apiResponse[curr].map((dept) => {
    return { ...dept, dept: curr };
  });
  acc.push(...addingDeptField);

  return acc;
}, []);

// Q2
const events = [
  { type: "click", page: "home" },
  { type: "click", page: "about" },
  { type: "click", page: "home" },
  { type: "scroll", page: "about" },
  { type: "scroll", page: "home" },
];
// output
// {
//   home: { click: 2, scroll: 1 },
//   about: { click: 1, scroll: 1 },
// }

const eventsResult = events.reduce((acc, curr) => {
  const type = curr.type;
  acc[curr.page] = acc[curr.page] || {};
  acc[curr.page][type] = (acc[curr.page][type] || 0) + 1;

  return acc;
}, {});

// Q3
const inventory = [
  { sku: "A1", name: "Pen", price: 10, qty: 100 },
  { sku: "B2", name: "Notebook", price: 50, qty: 40 },
  { sku: "C3", name: "Eraser", price: 5, qty: 200 },
];
// Build an object indexed by sku, where each entry contains just name and a computed totalValue field (price * qty) — drop price and qty from the output entirely.
// output
// {
//   A1: { name: "Pen", totalValue: 1000 },
//   B2: { name: "Notebook", totalValue: 2000 },
//   C3: { name: "Eraser", totalValue: 1000 },
// }

// Solution
const inventoryResult = inventory.reduce((acc, curr) => {
  acc[curr.sku] = {};
  acc[curr.sku].name = curr.name;
  acc[curr.sku].totalValue = curr.price * curr.qty;

  return acc;
}, {});
console.log(inventoryResult);

// Solution 2
const inventoryResult2 = inventory.reduce((acc, curr) => {
  acc[curr.sku] = {
    name: curr.name,
    totalValue: curr.price * curr.qty,
  };

  return acc;
}, {});
console.log(inventoryResult2);

// Q4
// Build one object with two properties: byCode (lookup by code → name) and byName (lookup by name → code). #NOTE
const countries = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "JP", name: "Japan" },
];
// Output
// {
//   byCode: { IN: "India", US: "United States", JP: "Japan" },
//   byName: { India: "IN", "United States": "US", Japan: "JP" },
// }

// Solution
const countriesResult = countries.reduce((acc, curr) => {
  acc.byCode = {
    ...acc.byCode,
    [curr.code]: curr.name,
  };
  acc.byName = {
    ...acc.byName,
    [curr.name]: curr.code,
  };
  return acc;
}, {});

// Solution 2
const countriesResult2 = countries.reduce(
  (acc, curr) => {
    acc.byCode[curr.code] = curr.name;
    acc.byName[curr.name] = curr.code;

    return acc;
  },
  {
    byCode: {},
    byName: {},
  },
);

// Q5
const users = [
  { id: 1, firstName: "Alice", lastName: "Smith" },
  { id: 2, firstName: "Bob", lastName: "Jones" },
];
// Transform this into the shape a UI dropdown component typically expects — an array of { label, value } pairs, where label is the full name (firstName + " " + lastName) and value is the id.
// Output
[
  { label: "Alice Smith", value: 1 },
  { label: "Bob Jones", value: 2 },
];

const usersResult = users.map((user) => ({
  label: user.firstName + " " + user.lastName,
  value: user.id,
}));

//Q6 - Merging two related arrays by a shared ID
// Merge these two arrays into one, attaching each user's role (if they have one). If a user has no matching entry in roles, set role: "Unknown".

const usersBe = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const roles = [
  { userId: 1, role: "Admin" },
  { userId: 2, role: "Editor" },
];
// Output
// [
//   { id: 1, name: "Alice", role: "Admin" },
//   { id: 2, name: "Bob", role: "Editor" },
//   { id: 3, name: "Charlie", role: "Unknown" },   // no match in roles
// ]

const usersWithRoles = usersBe.map((user) => {
  const matchedRole = roles.find((role) => role.userId === user.id);

  return {
    ...user,
    role: matchedRole ? matchedRole.role : "Unknown",
  };
});
console.log(usersWithRoles);

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

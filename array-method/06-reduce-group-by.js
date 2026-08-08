/**
 * Given people = [{name,dept}, ...], use .reduce() to group names by department → {Engineering:[...], Sales:[...]} (using push, not spread — O(n) not O(n²))
 */

const people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Sales" },
  { name: "Charlie", dept: "Engineering" },
];

/**
 * {
  Engineering: ["Alice", "Charlie"],
  Sales: ["Bob"]
}
 */

const result = people.reduce((acc, curr) => {
  const key = curr.dept;
  const key1 = curr.name;
  if (!acc[key]) {
    acc[key] = [key1];
  } else {
    acc[key] = [...acc[key], key1];
  }
  return acc;
}, {});

/** OPTIMISE SOLUTION */
const result1 = people.reduce((acc, curr) => {
  const key = curr.dept;
  acc[key] = acc[key] || [];
  acc[key].push(curr.name);

  return acc;
}, {});

/**
 * Given students = [{name,score}, ...], use a single .reduce() to return names of students with score >= 60
 */

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 40 },
  { name: "Charlie", score: 92 },
  { name: "Dave", score: 55 },
];

/**
 * ["Alice", "Charlie"]
 */

const result = students.reduce((acc, curr) => {
  if (curr.score >= 60) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log(result);

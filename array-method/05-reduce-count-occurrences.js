/**
 * Given votes = ["cat","dog","cat","cat","dog","fish"], use .reduce() to count occurrences → {cat:3, dog:2, fish:1}
 */

const votes = ["cat", "dog", "cat", "cat", "dog", "fish"];
/**
 * { cat: 3, dog: 2, fish: 1 }
 */

const result = votes.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(result);

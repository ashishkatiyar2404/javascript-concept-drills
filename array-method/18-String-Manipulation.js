// Using .split(), extract the first name and last name into separate variables.
const fullName = "Alice Smith";
const [firstName, lastName] = fullName.split(" ");

console.log(firstName);
console.log(lastName);

// Q2
// Reverse it to get "olleh", without using a built-in .reverse() string method directly (strings don't actually have .reverse() — only arrays do — so think about how you'd convert between them).
const word = "hello";

function reverseString(str) {
  let resultStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr = resultStr + str[i];
  }
  return resultStr;
}
console.log(reverseString(word));

// Q3 -Capitalize each word (title case), Transform it to: "The Quick Brown Fox" — capitalize the first letter of each word.
const sentence = "the quick brown fox";
const transforming = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(transforming);

//Q4 -Truncate text with ellipsis (real UI pattern)
const text = "This is a really long product description that needs truncating";
// output
// truncate("Hello World", 20)  // "Hello World"  (already short enough, unchanged)
// truncate("This is a really long product description that needs truncating", 20)
// "This is a really..."   (17 chars + "..." = 20 total)

// Solution
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;

  return str.slice(0, maxLength - 3) + "...";
}
console.log(truncate(text, 20));

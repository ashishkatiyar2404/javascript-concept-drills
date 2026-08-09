/**
 * Q16: Parse a URL query string into an object. Repeated keys become arrays.
 * Input:  parseQueryString("?name=Alice&age=30&tags=admin&tags=editor")
 * Output: { name: "Alice", age: "30", tags: ["admin", "editor"] }
 */

function parseQueryString(qs) {
  const cleaned = qs.replace("?", "");
  const pairs = cleaned.split("&");

  const result = {};
  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i].split("=");

    if (result[key]) {
      // key already exists — turn it into an array (or push to existing array)
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}

console.log(parseQueryString("?name=Alice&age=30&tags=admin&tags=editor"));

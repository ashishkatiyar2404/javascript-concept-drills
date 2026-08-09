/**
 * Q14: Safely read a nested value from an object using a dot-notation
 * string path, without throwing if a part of the path doesn't exist.
 * Input:  resolvePath({address:{city:{zip:"400001"}}}, "address.city.zip")
 * Output: "400001"
 *
 * Input:  resolvePath({address:{}}, "address.city.zip")
 * Output: undefined
 */

function resolvePath(obj, path) {
  const keys = path.split(".");
  return keys.reduce((acc, key) => {
    if (acc === undefined || acc === null) {
      return undefined;
    }
    return acc[key];
  }, obj);
}

console.log(
  resolvePath({ address: { city: { zip: "400001" } } }, "address.city.zip"),
);
console.log(resolvePath({ address: {} }, "address.city.zip"));

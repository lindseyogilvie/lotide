// Function evaluates two arguments for equality
const assertEqual = require('./assertEqual');

// Function iterates through keys in an object and returns key with the desired value
const findKey = function(object, callback) {
  for (let keys in object) {
    // If callback is truthy, return keys
    if (callback(object[keys])) {
      return keys;
    }
  }
  // If callback is not truthy, return undefined
  return undefined;
};

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, "noma"); // => Assertion Passed

const test2 = findKey({
  apples: 7,
  banans: 16,
  coconuts: 0,
  eggs: 12,
  oranges: 1,
  carrots: 3
}, x => x === 1) // => "oranges"

assertEqual(test2, "oranges"); // => Assertion Passed

const test3 = findKey({
  apples: 7,
  banans: 16,
  coconuts: 0,
  eggs: 12,
  oranges: 1,
  carrots: 3
}, x => x === 13) // => "undefined"

assertEqual(test3, undefined); // => Assertion Passed
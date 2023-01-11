// Create a function that compares two arrays for equality
const eqArrays = function (array1, array2) {
  // If the length the arrays differs, return false immediately
  if (array1.length !== array2.length) {
    return false
  // If the length of the arrays is the same, iterate over each item in both arrays to determine equality
  } else {
    for (let i = 0; i < array1.length; i++) {
      // If items in the arrays differ, return false
      if (array1[i] !== array2[i]) {
        return false;
      } 
    }
    // If items in the arrays are the same, return true
    return true;
  }
};

// Create a function that compares two arrays using eqArrays and outputs an assertion
const assertArraysEqual = function (array1, array2) {
  // If eqArrays evaluates to true, log Assertion Passed
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  // If eqArrays evaluates to false, log Assertion Failed
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};


// Create a function that returns a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  // Create an empty array to hold elements from source that are not present in itemsToRemove 
  newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

console.log(without([1, 1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => Assertion Passed
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => Assertion Passed
assertArraysEqual(without([5, 6, 8], [6]), [5, 8]) // => Assertion Passed
assertArraysEqual(without(["graham crackers", "marshmallow", "chocolate"], ["crackers", "caramel"]), ["graham crackers", "marshmallow", "chocolate"]) // => Assertion Passed

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
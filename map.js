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

// MAP METHOD
const words = ["ground", "control", "to", "major", "tom"];

// Callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


const dogNames = ["Theo", "Toby", "Tucker", "Tommy"];
const fruits = ["apple", "banana", "coconut", ""];

assertArraysEqual(map(dogNames, names => names.length), [4, 4, 6, 5]); // Assertion Passed
assertArraysEqual(map([], names => person[0]), []); // => If array is empty, empty array is returned. Assertion Passed.
assertArraysEqual(map(fruits, names => names += "s"), ["apples", "bananas", "coconuts", "s"]); // Assertion Passed
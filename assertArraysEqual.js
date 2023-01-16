const eqArrays = require("./eqArrays");

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

module.exports = assertArraysEqual;

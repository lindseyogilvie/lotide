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


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Assertion Passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Assertion Failed

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Assertion Passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Assertion Failed


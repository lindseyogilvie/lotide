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

const middle = function(arrays) {
  let newArray = []
  let middleIndex = 0
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arrays.length <= 2) {
    // Return an empty array
    return newArray;
  // For arrays with an odd number of elements, return an array with a single middle element
  } else if (arrays.length > 2 && arrays.length % 2 !== 0) {
    middleIndex = (arrays.length / 2) - 0.5;
    newArray.push(arrays[middleIndex]);
  // For arrays with an even number of elements, return an array with two middle elements
  } else if (arrays.length > 2 && arrays.length % 2 === 0) {
    middleIndex = (arrays.length / 2) - 1;
    newArray.push(arrays[middleIndex]);
    newArray.push(arrays[middleIndex + 1]);
  }
  return newArray
}

assertArraysEqual(middle([9]), []) // => Assertion Passed
assertArraysEqual(middle([12, 13]), []) // => Assertion Passed

assertArraysEqual(middle(['a', 'b', 'c']), ['b']) // => Assertion Passed
assertArraysEqual(middle(['apple', 'bobcat', 'china', 'dogs', 'engaged']), ['china']) // => Assertion Passed

assertArraysEqual(middle([4, 3, 2, 1]), [3, 2]) // => Assertion Passed
assertArraysEqual(middle([6, 5, 4, 3, 2, 1]), [4, 3]) // => Assertion Passed
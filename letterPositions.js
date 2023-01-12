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

// Create a function that returns all the indices where each character in the string is found
const letterPositions = function(sentence) {
  let results = {};
  // Iterate through each letter in the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {   
    } else {
      if (results[sentence[i]]) {
        results = {...results, [sentence[i]]: [...results[sentence[i]], i]};
      } else {
        results = {...results, [sentence[i]]: [i]};
      }
    }
  }
  return results;
};  


const result1 = letterPositions("hello");
console.log(result1);

assertArraysEqual(result1["o"], [4]); // => Assertion Passed

const result2 = letterPositions("supercalifragilisticexpialidocious");
console.log(result2);

assertArraysEqual(result2["x"], [21]); // => Assertion Passed
assertArraysEqual(result2["s"], [0, 16, 33]); // => Assertion Passed
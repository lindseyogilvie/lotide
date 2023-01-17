// Create a function that compares two arrays for equality
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
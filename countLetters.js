// Function evaluates two elements for equality and logs corresponding Pass/Fail Assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function takes in a sentence as a string and returns a count of each letter in the sentence
const countLetters = function (sentence) {
  const results = {};
  // Iterate through each letter in the sentence
  for (let letter of sentence) {
    if (letter === " ") {   
    } else {
      if (results[letter]) {
        results[letter] += 1;
      // If item does not exist in results object yet, create and set count to 1
      } else { 
        results[letter] = 1;
      }
    }
  }
  return results;
}

const result1 = countLetters("supercalifragilisticexpialidocious");
console.log(result1);

assertEqual(result1["a"], 3); // => Assertion Passed
assertEqual(result1["i"], 7); // => Assertion Passed
assertEqual(result1["l"], 3); // => Assertion Passed
assertEqual(result1["F"], undefined); // => Assertion Passed
assertEqual(result1["z"], undefined); // => Assertion Passed

const result2 = countLetters("I need a coffee");
console.log(result2);

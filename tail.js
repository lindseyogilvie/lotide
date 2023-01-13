// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION. Create a function that returns the first item in an array.
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words1 = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words1)); // => ["Lighthouse", "Labs"]
assertEqual(words1.length, 3);

// Test Case: Single element array
const words2 = ["Labs"];
console.log(tail(words2)); // => []

// Test Case: Empty array
const words3 = [];
console.log(tail(words3)); // => []
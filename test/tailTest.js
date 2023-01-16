const assertEqual = require('../assertEqual');
const tail = require('../tail');

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
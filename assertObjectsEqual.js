const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');

// Create a function that compares two objects using eqObjects and outputs a Pass/Fail assertion
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  // If eqArrays evaluates to true, log Assertion Passed
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  // If eqArrays evaluates to false, log Assertion Failed
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


assertObjectsEqual(shirtObject, anotherShirtObject); // => Assertion Passed
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => Assertion Failed
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => Assertion Passed
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => Assertion Failed
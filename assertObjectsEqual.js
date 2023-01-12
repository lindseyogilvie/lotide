// Function evaluates two arrays for equality
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } 
    }
    return true;
  }
};

// Function evaluates two elements for equality
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function takes in two objects and returns true if perfect match, else false
const eqObjects = function(object1, object2) {
  // If the objects are not the same length, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    //If the objects are the same length, iterate through the object keys
    for (let obj in object1) {
      // If the key value is an array, determine equality using eqArrays function
      if (Array.isArray(object1[obj])) {
        if (!eqArrays(object1[obj], object2[obj])) {
          return false;
        }
      // If the key value is not an array, compare the values. If they do not match, return false
      } else if (object1[obj] !== object2[obj]) {
        return false;
      }
    }
    // Return true in all other cases
    return true;
  }
};


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
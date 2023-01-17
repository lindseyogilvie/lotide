const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

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

module.exports = eqObjects;


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => Assertion Passed


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => Assertion Passed


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => Assertion Passed

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => Assertion Passed
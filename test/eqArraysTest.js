const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => Assertion Passed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => Assertion Passed

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false) // => Assertion Failed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => Assertion Passed
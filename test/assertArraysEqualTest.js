const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Assertion Passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Assertion Failed

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Assertion Passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Assertion Failed

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE
assertArraysEqual(middle([9]), []) // => Assertion Passed
assertArraysEqual(middle([12, 13]), []) // => Assertion Passed

assertArraysEqual(middle(['a', 'b', 'c']), ['b']) // => Assertion Passed
assertArraysEqual(middle(['apple', 'bobcat', 'china', 'dogs', 'engaged']), ['china']) // => Assertion Passed

assertArraysEqual(middle([4, 3, 2, 1]), [3, 2]) // => Assertion Passed
assertArraysEqual(middle([6, 5, 4, 3, 2, 1]), [4, 3]) // => Assertion Passed
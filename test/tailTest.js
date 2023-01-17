const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2, 3, 4, 5 for [1, 2, 3, 4, 5]", () => {
    console.log(tail([1, 2, 3, 4, 5]))
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5])
  });
  it("returns 'Lighthouse' 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });
  it("returns an empty array when passed an array with a single element", () => {
    console.log(tail[1]);
    assert.deepEqual(tail([1]), []);
  });
  it("returns an empty array when passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});

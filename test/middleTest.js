const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['b'] from ['a', 'b', 'c']", () => {
    assert.deepEqual(middle(['a', 'b', 'c']), ['b']);
  });
  it("returns ['b', 'c'] from ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
  });
  it("returns an empty array when passed an array with a single element", () => {
    assert.deepEqual(middle([1]), []);
  })
  it("returns an empty array when passed an array with two elements", () => {
    assert.deepEqual(middle(['a', 'b']), []);
  })
});
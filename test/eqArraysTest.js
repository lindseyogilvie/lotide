const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });
  it("returns false for ['1', '2', '3'] and ['3', '2', '1']", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['3', '2', '1']));
  });
  it("returns false for ['1', '2', '3'] and ['1', '2']", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2']));
  });
})

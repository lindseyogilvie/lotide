const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] from ['ground', 'control', 'to', 'major', 'tom] and word => word[0]", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns [4, 4, 6, 5] from ['Theo', 'Toby', 'Tucker', 'Tommy'] and names => names.length", () => {
    const dogNames = ["Theo", "Toby", "Tucker", "Tommy"];
    assert.deepEqual(map(dogNames, names => names.length), [4, 4, 6, 5]);
  });
  it("returns ['apples', 'bananas', 'coconuts', 's'] from ['apple', 'banana', 'coconut', ''] and names => names += 's'", () => {
    const fruits = ["apple", "banana", "coconut", ""];
    assert.deepEqual(map(fruits, names => names += "s"), ["apples", "bananas", "coconuts", "s"]);
  });
});

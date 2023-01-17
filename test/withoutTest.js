const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] from [1, 2, 3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] from ['1', '2', '3'] and [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  it("returns [5, 8] from [5, 6, 8] and [6]", () => {
    assert.deepEqual(without([5, 6, 8], [6]), [5, 8])
  });
  it("returns ['graham crackers', 'marshmallow', 'chocolate'] from ['graham crackers', 'marshmallow', 'chocolate'] and ['crackers', 'caramel']", () => {
    assert.deepEqual(without(["graham crackers", "marshmallow", "chocolate"], ["crackers", "caramel"]), ["graham crackers", "marshmallow", "chocolate"])
  });
  it("returns unaltered original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); 
    assert.deepEqual(words, ["hello", "world", "lighthouse"])
  });
});

const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", ()=> {
  it("returns [1, 2, 5, 7, 2] from [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] from ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and x => x === ','", () => {
    data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data1, x => x === ',' ), ["I've", "been", "to", "Hollywood"]);
  });
});

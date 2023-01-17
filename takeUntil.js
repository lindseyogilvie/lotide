// Function iterates through array, and adds items to new array until a specific item is reached
const takeUntil = function(array, callback) {
  let results = [];
  let index = 0;
  // Iterate through each item in the array until we get to the desired item
  for (i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      index = i
    }
  }
  for (i = 0; i < index; i++) {
    results.push(array[i]);
  }
  return results;
};

module.exports = takeUntil;

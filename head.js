// FUNCTION IMPLEMENTATION. Create a function that returns the first item in an array.
const head = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array[0];
  }
};

module.exports = head;
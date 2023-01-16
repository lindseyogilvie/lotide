// FUNCTION IMPLEMENTATION. Create a function that returns the first item in an array.
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;
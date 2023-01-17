// Create a function that returns a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  // Create an empty array to hold elements from source that are not present in itemsToRemove 
  newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}

module.exports = without;
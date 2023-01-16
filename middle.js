const middle = function(arrays) {
  let newArray = []
  let middleIndex = 0
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arrays.length <= 2) {
    // Return an empty array
    return newArray;
  // For arrays with an odd number of elements, return an array with a single middle element
  } else if (arrays.length > 2 && arrays.length % 2 !== 0) {
    middleIndex = (arrays.length / 2) - 0.5;
    newArray.push(arrays[middleIndex]);
  // For arrays with an even number of elements, return an array with two middle elements
  } else if (arrays.length > 2 && arrays.length % 2 === 0) {
    middleIndex = (arrays.length / 2) - 1;
    newArray.push(arrays[middleIndex]);
    newArray.push(arrays[middleIndex + 1]);
  }
  return newArray
}

module.exports = middle;
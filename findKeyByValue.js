// Function evaluates two elements for equality and logs a Pass/Fail Assertion
const assertEqual = require('./assertEqual');

// Function takes an object and a value, returns the first key which contains the given value
const findKeyByValue = function (object, value) {
  // Iterate over the keys in the object
  for (let obj in object) {
    // If the desired value exists, return corresponding key
    if (object[obj] === value) {
      return obj;
    }
  }
  // If no key with the given object is found, return undefined
  return undefined;
}

// TEST IMPLEMENTATION
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => Assertion Passed
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => Assertion Passed

const bestSongOnTaylorSwiftAlbums = { 
  red: "All Too Well",
  lover: "Cornerlia Street",
  folklore: "My Tears Richochet",
  evermore: "Gold Rush",
  midnights: "Maroon",
  
};

assertEqual(findKeyByValue(bestSongOnTaylorSwiftAlbums, "Gold Rush"), "evermore"); // => Assertion Passed
assertEqual(findKeyByValue(bestSongOnTaylorSwiftAlbums, "My Tears Richochet"), "folklore"); // => Assertion Passed
assertEqual(findKeyByValue(bestSongOnTaylorSwiftAlbums, "Cornelia Street"), "red"); // => Assertion Failed
assertEqual(findKeyByValue(bestSongOnTaylorSwiftAlbums, "Midnight Rain"), undefined); // => Assertion Passed
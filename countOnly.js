// Function evaluates two elements for equality and logs corresponding Pass/Fail Assertion
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function that is given an array and an object and will return an object contianing counts of everything that the input object listed
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  // Iterate through all elements of the allItems array
  for (const item of allItems) {
    // If item in array exists in itemsToCount object, count the object 
    if (itemsToCount[item]) {
      // If the item already exists in our results object, then add to count
      if (results[item]) {
        results[item] += 1;
      // If item does not exist in results object yet, set count to 1
      } else { 
        results[item] = 1;
      }
    }
  }
  // Return results object
  return results;
}

// TEST IMPLEMENTATION
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1); //
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

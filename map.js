// Returns an array with the output from the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

console.log(map(words, word => word[0]))
module.exports = map;
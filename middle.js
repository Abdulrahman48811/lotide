const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};


const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;


module.exports = middle;
 console.log(middle([1, 2, 3]) )
 console.log(middle([1, 2, 3, 4, 5]))
 console.log(middle([1, 2, 3, 4]) )
 console.log(middle([1, 2, 3, 4, 5, 6]))
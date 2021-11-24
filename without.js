const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = without;

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
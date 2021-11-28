const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) 
  return (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`))
};



const { inspect } = require('util');

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if(Array.isArray(i) && Array.isArray(j)){
        if (!eqArrays(object1.i, object2.j)) 
       {
          return false; 
        }
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          return false;
        } else if (object1.i === object2.j) {
          return true;
        }
      }      
    }
  }
  return true;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
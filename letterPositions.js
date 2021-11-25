const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};




const letterPositions = function(sentence) {

  const newObject = {};


for(let i = 0; i < sentence.length; i++){
  let character = sentence[i];



  if (character !== " ") {
    if (newObject[character]) {
      newObject[character].push[i];
    } else {

      newObject [character] = [i];
    }

  } 

}
return newObject;

};



console.log(letterPositions("hello"));





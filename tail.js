const assertEqual = require('./assertEqual');
const tail = function(arr) {
  const newArr = [...arr];
  if (newArr.length === 1) {
    return newArr;
  } else {
    newArr.shift();
    return newArr;
  }
};
module.exports = assertEqual;
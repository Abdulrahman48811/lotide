const assertEqual = require('chai').assertEqual;
const tail = require("../tail")

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);// no need to capture the return value since we are not checking it
tail(words.length, 3)

// assertEqual(words.length, 3);


// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5');
//   });
// });



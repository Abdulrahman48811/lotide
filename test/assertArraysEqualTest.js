const assertArraysEqual = require("../assertArraysEqual")

assertArraysEqual(([1, 2, 3]), [2])
assertArraysEqual(([1, 2, 3, 4, 5]), [1])
assertArraysEqual(([1, 2, 3, 4]), [2] )
assertArraysEqual(([1, 2, 3, 4, 5, 6]), [4])
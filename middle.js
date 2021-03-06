const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr1) {
  let midResult = [];

  if (arr1.length % 2 === 0) {
    let num1 = arr1[Math.round((arr1.length / 2) - 1)];
    let num2 = arr1[Math.round(arr1.length / 2)];
    midResult = midResult.concat([num1, num2]);
  } else {
    midResult = [arr1[Math.round((arr1.length - 1) / 2)]];
  }
  return midResult;
};    

module.exports = middle;

//TEST


 assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
//  assertArraysEqual(middle([1, 2, 3]), [2]); // PASS
//  assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // PASS
//  assertArraysEqual(middle([1, 2, 3]), ["2"]); // FAIL
//  assertArraysEqual(middle([1, 2, 3, 4]), [3, 2]); // FAIL
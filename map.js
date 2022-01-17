const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }
      
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let passed =  '✅✅✅';
  let failed = '❗❗❗';
  if (eqArrays(actual, expected)) {
    console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words1 = ["ground", "control", "to", "major", "tom"];
const words2 = [];
const words3 = [1, 2];

const map = (arr, callback) => {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, []);
assertArraysEqual(results3, [undefined, undefined]);

module.exports = map;


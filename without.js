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

const without = (source, itemsToRemove) => {
  let filteredArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filteredArr.push(source[i]);
    }
  }
  return filteredArr;
};

assertArraysEqual(without([], ['hello']), ['hello']);
assertArraysEqual(without([1, 2, 3], [1]), [2, '3']); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

assertArraysEqual(without(words, ["lighthouse"]), words, ["hello", "world", "lighthouse"]);
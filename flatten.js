const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length){
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

const flatten = arr => {
  let flattenedArr = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let el of elem) {
        flattenedArr.push(el);
      }
    } else {
      flattenedArr.push(elem);
    }
  } 
  return flattenedArr
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);


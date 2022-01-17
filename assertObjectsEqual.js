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

const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }
  for (let key of objectKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  let passed =  '✅✅✅';
  let failed = '❗❗❗';
  
  if (eqObjects(actual, expected)) {
    console.log(`${passed} Assertion Passed: ${inspect(actual)} ===
    ${inspect(expected)}`);
  } else {
    console.log(`${failed} Assertion Failed: ${inspect(actual)} !==
    ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => passed

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => failed

module.exports = assertObjectsEqual;
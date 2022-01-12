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


const middle = function(arr) {
  
  let middleInd = Math.floor(arr.length / 2);

  if(arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[middleInd - 1], arr[middleInd]];
  } else {
    return [arr[middleInd]];
  }
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([5, 3, 4, 6, 7, 6, 5]), [6])

assertArraysEqual(middle([5, 3, 25, 14, 17, 6, 5, 9]), [14, '17'])

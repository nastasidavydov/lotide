const assertArraysEqual = function(actual, expected) {
  let passed =  '✅✅✅';
  let failed = '❗❗❗';
  if (actual === expected) {
    console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length){
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) { 
    if ( ((Array.isArray(arr1[i])) && Array.isArray(arr2[i]) 
    && (!eqArrays(arr1[i], arr2[i]))) ||

     ( !(Array.isArray(arr1[i]) && Array.isArray(arr2[i]) ) 
     && (arr1[i] !== arr2[i])) ) {
      return false;
    }

    // if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {  
    //   console.log(`execution context: ${arr1[i]} and ${arr2[i]}`)
    //   if (!eqArrays(arr1[i], arr2[i])){
    //     return false
    //   }
    // } else if (arr1[i] !== arr2[i]){
    //   return false;
    // }
    
  }
  return true; 
};



assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertArraysEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false

assertArraysEqual(eqArrays([[2, 3, [2]], [5]], [[2, 3, [2]], [5]]), true)

assertArraysEqual(eqArrays([2, 3, [4, [5, 7]]], [2, 3, [4, [5, 7]]]), true)


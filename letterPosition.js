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


const letterPositions = function(sentence) {
  const results = {};
  let letters = sentence.split("");
  for (let i = 0; i < letters.length; i++){
    let letter = letters[i]
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [];
        results[letter].push(i);
      }
    }
  }
  return results;
};

let outputLetters1 = letterPositions("lighthouse in the house");
let outputLetters2 = letterPositions("hello");

assertArraysEqual(outputLetters1['e'], [9, 16, 22]);
assertArraysEqual(outputLetters2['l'], [2, 3]);
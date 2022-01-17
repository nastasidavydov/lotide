const assertEqual = function(actual, expected) {
  let passed =  '✅✅✅';
  let failed = '❗❗❗';
  if (actual === expected) {
    console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = sentence => {
  const result = {};
  let letters = sentence.toLowerCase().split("");
  for (let letter of letters) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};


let outputLetters1 = countLetters('LHL');
let outputLetters2 = countLetters("lighthouse in the house");

assertEqual(outputLetters1['l'], 2);
assertEqual(outputLetters2['h'], 4);

module.exports = countLetters;
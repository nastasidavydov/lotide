const assertEqual = function(actual, expected) {
  let passed =  '✅✅✅';
  let failed = '❗❗❗';
  if (actual === expected) {
    console.log(`${passed} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = arr => {
  return arr.slice(1);
};

const resultArr = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(resultArr.length, 3);
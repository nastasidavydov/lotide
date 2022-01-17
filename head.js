const assertEqual = require('./assertEqual');

const head = arr => {
  return arr[0];
}

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
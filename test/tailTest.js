const assertEqual = require('../assertEqual');
const tail = require('../tail');

const resultArr = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(resultArr.length, 2);
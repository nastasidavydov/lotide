const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('returns 2 for ["Hello", "Lighthouse", "Labs"]', () => {
    let inputArr = ["Hello", "Lighthouse", "Labs"];
    let expectedResult = tail(inputArr);

    assert.strictEqual(expectedResult.length, 2);
  });

});


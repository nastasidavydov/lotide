const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [] for [1]', () => {
    const inputArr = [1];
    const actualResult = middle(inputArr);

    assert.deepEqual(actualResult, []);
  });

  it('should return [] for [1, 2]', () => {
    const inputArr = [1, 2];
    const actualResult = middle(inputArr);

    assert.deepEqual(actualResult, []);
  });

  it('should return [2] for [1, 2, 3]', () => {
    const inputArr = [1, 2, 3];
    const actualResult = middle(inputArr);

    assert.deepEqual(actualResult, [2]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    const inputArr = [1, 2, 3, 4];
    const actualResult = middle(inputArr);

    assert.deepEqual(actualResult, [2, 3]);
  });


});
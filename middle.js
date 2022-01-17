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

module.exports = middle;
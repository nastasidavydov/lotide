const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);

  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  }

  for (let key of objectKeys1) {
    if (!object2[key]) { // if one has another dont - false
      return false;
    }

    if ((typeof object1[key] === 'object') && !(Array.isArray(object1[key]) && Array.isArray(object2[key]))) {

      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }

    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

const obj1 = { 
  a: { 
    y: 0,
    z: {
      c: {
        d : [1, 2, 3]
      }
    } },
  b: 2 };

  const obj2 = {
    a: {
      y: 0,
      z: {
        d: {
          c : [1, 2, 3]
        }
      } },
    b: 2 };


  assertEqual(eqObjects(obj1, obj2), false);
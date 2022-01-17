# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ndav/lotide`

**Require it:**

`const _ = require('@ndav/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: outputs first element of an array
* `tail(arr)`: outputs an array of elements except the first one
* `eqArrays(arr1, arr2)`: checks if every element of 2 arrays match
* `eqObjects(obj1, obj 2)`: checks if every key value pair of 2 objects match
* `without(arr, itemsToRemove)`: filters specific items in array from another array
* `middle(arr)`: returns an array of middle-most elements
* `countOnly(obj, count)`: takes in a collection of items and returns count for specific subset of those items
* `countLetters(str)`: returns an object representing count of each letter in a string
* `letterPositions(str)`: returns an object representing indices of a string where each character is found
* `findKeyByValue(obj, value)`: search the object and returns first key containing given value
* `assertObjectsEqual(obj1, obj2)`: checks the equality of 2 arrays and prints corresponding message
* `assertArraysEqual(arr1, arr2)`: checks the equality of 2 arrays and prints corresponding message
* `assertEqual(actual, expected)`: checks the equality of 2 values and prints corresponding message
* `map(arr, callback)`: returns a new array of first indices of input array strings
* `takeUntil(arr, callback)`: slice an array from the beggining until specified condtition
* `findKey(obj, callback)`: search for a key in a given obj which satisfies the provided condition
* `flatten(arr)`: transfroms one-level-nested array to single-level array


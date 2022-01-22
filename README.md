# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install abdulbasit79/lotide`

**Require it:**

`const _ = require('abdulbasit79/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertArraysEqual takes two arrays and take two objects and compare it.
* `assertEqual(...)`: assertEqual The assertEqual function compares the two values it receives and prints a message indicating whether they are equal.
* `assertObjectsEqual(...)`: assertObjectsEqual is a function that compares two objects and then console.log  a message to the console that is appropriate.
* `countLetters` :this will take a sentence as a string and count each letter in that sentence.
* `countOnly` : This function will return an object with counts for all of the items provided in the input object.
* `eqArrays` : The eqArrays method takes two arrays and returns true or false depending on whether they are identical.
* `eqObjects` : The eqObjects method takes two objects and returns true or false depending on whether they are a perfect match.
* `findKey` : The findKey function accepts an object and a callback as input and returns the first key for which the callback returns a truthy value.If there is no key it comes out as undefined.
* `findKeyByValue` :The function findKeyByValue takes an object and a value and returns the first key that contains the provided value. If no key with that value is found, undefined should be returned.
* `head` : this function returns the first item in the array.
* `letterPositions` :All the indices (zero-based places) in the string where each character is located will be returned by the letterPositions function.
* `map` :The map function iterates across the specified array and calls a callback, returning a result based on the callback condition.
* `middle` :The middle function takes an array as input and returns the middle element(s) of the array.
* `tail` : The tail function returns the "tail" of an array, that is, everything except the first item (head) in the array.
* `takeUntil` :takeUntil will keep collecting elements from an array until the specified callback produces a truthy value.
* `without` :Without a function, subset of a specified array will be returned, with undesired entries removed.
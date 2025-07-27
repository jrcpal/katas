import { useState } from "react";

const obj = {};

const objArray = [{}, {}];

// make multiple objects, with key as id, and values as names
const names = [
  {
    id: 1,
    name: "Jess",
    age: 37,
    prize: "trophy",
    category: "electronics",
  },
  {
    id: 2,
    name: "Alex",
    age: 34,
    prize: "balloons",
    category: "arts",
  },
  {
    id: 3,
    name: "Jane",
    age: 39,
    prize: "coupon",
    category: "science",
  },
];

// filter the objects for age greater than 34

// .filter() method
// dot notation accesses the keys within the object!!!!
// bracket notation acceses the index in an array

// const young = names.filter(name => name.age > 34)
// console.log(young)

// sum all of the age data in the object
// iterate through the objects in the array
// reduce the age values to one number
// access the age value within each object

function ageSum(array) {
  // let sumAge = 0

  // for ( const person of array) {
  //     //console.log(person.age)
  //     let age = person.age
  //     sumAge += age

  // }

  // return sumAge

  let sumAge = array.reduce((acc, curr) => curr.age + acc, 0);
  return sumAge;
}

//console.log(ageSum(names))

// Hoisting:
// lifting variable to global scope even before initialization

console.log(a);
var a = 20;

console.log("b =", b);
let b = 10;

// Instructions
// ------------------------------------------
//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//

// Solution
// ------------------------------------------
const counter = (n: number) => {
    function implement() {
        return n++;
    }
    return implement;
}

const myCounter = counter(10)

// single line anonymous function solution
// const counter = (n: number) => () => n++


// Console
// ------------------------------------------
console.log('Function counter: ', myCounter())
console.log('Function counter: ', myCounter())
console.log('Function counter: ', myCounter())



// Notes
// ------------------------------------------
// this is a classic example of closure in javascript
// the inner function increment() has access to the outer function's scope
// the outer function has access to the global scope
// the inner function can be called outside of the outer function


// Original Test
// ------------------------------------------
//Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Instructions
// ------------------------------------------
//
//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Solution
// ------------------------------------------

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number
}

const createCounter = function(init: number): Counter {
    let currentVal: number = init

    return {
        increment: () => ++currentVal,
        decrement: () => --currentVal, 
        reset: () => currentVal = init
    }
} 


// Console
// ------------------------------------------
const counter = createCounter(10)
// Console
console.log('Initial value: 10');
console.log('Increment expects 11 and returns: ', counter.increment()); // 11
console.log('Increment expects 12 and returns: ', counter.increment()); // 12
console.log('Decrement expects 11 and returns: ', counter.decrement()); // 11
console.log('Reset expects 10 and returns: ', counter.reset()); // 10
console.log('Decrement expects 9 and returns: ', counter.decrement()); // 9



// Notes
// ------------------------------------------
//
// The expressions ++currentVal and --currentVal are examples of pre-increment and pre-decrement, respectively. 
// Pre-increment (++currentVal) increases the value before returning it, while post-increment (currentVal++) returns the value before increasing it. 
// Similarly, pre-decrement (--currentVal) decreases the value before returning it, while post-decrement (currentVal--) returns the value before decreasing it.

//This distinction matters because it affects the value that is returned by the expression. 
// For example, if you use pre-increment (++currentVal) in a function, the incremented value is returned immediately. 
// However, if you use post-increment (currentVal++), the original value is returned first, and then the increment happens.
// This can impact the logic and outcome of your code, especially in loops, conditionals, and function calls where the order of operations is important.
//
// currentVal variable is needed to be able to manage state 



// Original Test
// ------------------------------------------
//

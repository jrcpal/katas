// Instructions
// ------------------------------------------
//
// Write a function

// function solution(A);

// that, given an array A consisting of N integers, returns the number of distinct values in array A.

// For example, given array A consisting of six elements such that:

//  A[0] = 2    A[1] = 1    A[2] = 1
//  A[3] = 2    A[4] = 3    A[5] = 1
// the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

// Solution
// ------------------------------------------
function distinct(A) {
    let distinctSet = new Set(A)
    return distinctSet.size
}


// Console
// ------------------------------------------
console.log('distinct([2, 1, 1, 2, 3, 1]) expects 3 and returns:', distinct([2, 1, 1, 2, 3, 1])); // 3


// Notes
// ------------------------------------------
//
// Sets contain only unique values
// Use .size to check length of a set
// Set() can be initialized with an array to remove duplicates, no need to loop through array to check for duplicates



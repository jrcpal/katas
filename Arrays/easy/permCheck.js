// Instructions
// ------------------------------------------
//
// A permutation is a sequence containing each element from 1 to N exactly once.

// Example of a permutation:
// A = [4, 1, 3, 2] -> returns 1

// Example of a non-permutation:
// A = [4, 1, 3] -> returns 0 (value 2 is missing)

// The goal is to check whether array A is a permutation.

// Write a function:
// function solution(A);

// that returns 1 if array A is a permutation and 0 if it is not.

// Solution
// ------------------------------------------
function permCheck(A) {
    const len = A.length

    // use Set to check for duplicates
    let permSet = new Set()

    for ( let i = 0; i < len; i++) {
        //check for out of permutation range
        if (A[i] < 1 || A[i] > len) return 0
        // check for duplicates
        if (permSet.has(A[i])) return 0

        permSet.add(A[i])
    }

    // check for any missing values
    return permSet.size === len ? 1 : 0
}


// Console
// ------------------------------------------
console.log('permCheck([4, 1, 3, 2]) expects 1 and returns:', permCheck([4, 1, 3, 2])); // 1
console.log('permCheck([4, 1, 3]) expects 0 and returns:', permCheck([4, 1, 3])); // 0
console.log('permCheck([1, 2, 3, 4, 5]) expects 1 and returns:', permCheck([1, 2, 3, 4, 5])); // 1
console.log('permCheck([1, 2, 2, 4, 5]) expects 0 and returns:', permCheck([1, 2, 2, 4, 5])); // 0
console.log('permCheck([1, 2, 3, 5]) expects 0 and returns:', permCheck([1, 2, 3, 5])); // 0


// Notes
// ------------------------------------------
//
// Sets contain only unique values 
// Use .size to check length of a set
// use .has to check if set/map includes a value 



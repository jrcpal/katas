// Instructions
// ------------------------------------------
//
//Write a function:

// function solution(A);

// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7 as 7 is unpaired

// Solution
// ------------------------------------------

function unpairedSolution1(A) {
    let unpaired = 0

    for (let num of A) {
        unpaired ^= num
    }

    return unpaired
}

// this solution is less elegant and doesn't perform as well with large number sets, but works for smaller data sets if not familiar with XOR operation
function unpairedSolution2(A) {
    let countMap = {}

    for (let num of A) {
        countMap[num] ? countMap[num]++ : countMap[num] = 1
    }

    for (let [num, count] of Object.entries(countMap)) {
        if (count === 1) return parseInt(num)
    }

    return "No unmatched pairs"
}


// Console
// ------------------------------------------
console.log('Function unpairedSolution1 expects 7 and returns: ', unpairedSolution1([9, 3, 9, 3, 7])); // Expected output: 7
console.log('Function unpairedSolution2 expects 7 and returns: ', unpairedSolution2([9, 3, 9, 3, 7])); // Expected output: 7

// Notes
// ------------------------------------------
//
// - The function unpairedSolution1 finds the unpaired element in an array using the XOR bitwise operator (^).
// - XOR (exclusive OR) is a bitwise operator that returns 1 if the bits are different and 0 if they are the same.
//
// Key Properties of XOR:
// - x ^ x = 0 (any number XORed with itself is 0)
// - x ^ 0 = x (any number XORed with 0 is the number itself)
// - XOR is commutative and associative, meaning the order of operations does not matter.
//
// How the Solution Works:
// - Initialize a variable unpaired to 0.
// - Iterate through each number in the array A.
// - XOR each number with the unpaired variable.
// - Due to the properties of XOR, pairs of the same number will cancel each other out (resulting in 0).
// - The unpaired number will be the only number left after all pairs have canceled out.
//
// Example with Given array A = [9, 3, 9, 3, 7]:
// - unpaired starts at 0
// - unpaired ^= 9 -> unpaired = 9
// - unpaired ^= 3 -> unpaired = 10 (since 9 ^ 3 = 10)
// - unpaired ^= 9 -> unpaired = 3 (since 10 ^ 9 = 3)
// - unpaired ^= 3 -> unpaired = 0 (since 3 ^ 3 = 0)
// - unpaired ^= 7 -> unpaired = 7 (since 0 ^ 7 = 7)
// - The final value of unpaired is 7, which is the unpaired element in the array.
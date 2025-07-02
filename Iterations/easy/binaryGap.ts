// Instructions
// ------------------------------------------
//
//A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// class Solution { public int solution(int N); }

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Solution
// ------------------------------------------

//option 1 using For loop

function binaryGap(N: number): number {

    let binaryStr = N.toString(2)
    let binaryArr = binaryStr.split('')

    let inGap = false;
    let maxGap = 0;
    let currentGap = 0;

    for (let char of binaryArr) {
        // determine if char is a 1 or a 0
        if (char === '1'){
            // determine if already in a gap or not
            if (inGap === true) {
                // if currently in a gap, this marks the end of the gap
                maxGap = Math.max(maxGap, currentGap)
                currentGap = 0
            }
            inGap = true
        }
        else if ( char === '0') {
            currentGap++
        }
    }
    return maxGap
}

// option 2 

function binaryGap2(N: number): number {
    const binaryStr = N.toString(2)
    // split the binary string into an array by the 1's in the array and map to return length of string
    // example: 100100010 returns array output: [0,2,0,3,0,1]
    let gapArr = binaryStr.split('1').map(char => char.length)
    // pop off the last element in array if array did not end with a 0, because that means it didn't have a trailing one and last gap is not a valid gap.
    if (gapArr[gapArr.length - 1] !== 0) gapArr.pop()

    return Math.max(...gapArr)
}

// Console
// ------------------------------------------
console.log('Testing solution with input 1041: ', binaryGap(1041)); // Expected output: 5
console.log('Testing solution with input 32: ', binaryGap(32)); // Expected output: 0

console.log('Testing solution2 with input 1041: ', binaryGap2(1041)); // Expected output: 5
console.log('Testing solution2 with input 32: ', binaryGap2(32)); // Expected output: 0



// Notes
// ------------------------------------------
//
// for ... in ... iterates over properties in an object, or indices in an array
// for ... of ... iterates over the values of an array or string


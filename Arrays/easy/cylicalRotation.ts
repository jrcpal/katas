// Instructions
// ------------------------------------------
/**
 * An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index,
 * and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6]
 * results in [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
 *
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
 *
 * Write a function:
 *
 * function solution(A: number[], K: number): number[];
 *
 * that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
 *
 * For example, given:
 *
 *     A = [3, 8, 9, 7, 6]
 *     K = 3
 *
 * the function should return [9, 7, 6, 3, 8].
 */

// Solution 1 
// ------------------------------------------
function rotateArray(A: number[], K: number): number[] {
  // get value of length of A
  let len = A.length;

  // set edge case if length of A or value of K is 0
  if (len === 0 || K === 0) return A;

  // Determine the number of rotations needed, because it's not necessary to rotate more times than the length of the array
  // Ensures K is within the bounds of the array length
  K = K % len;

  // Extract the last K elements from the array
  const last = A.splice(-K);

  // Add the remainder of the initial array to the end of the extracted array.
  return last.concat(A);
}

// Solution 2
// ------------------------------------------
function rotateArray2(A: number[], K: number): number[] {
    const len = A.length;
    K = K % len

    if (len === 0 || K === 0) return A

    for (let i = 0; i < K; i++) {
        // remove the last number in the array
        let last = A.pop() as number;
        
        // insert that last number to the beginning of the array
        A.unshift(last);
    }

    return A
}

// Console
// ------------------------------------------
console.log("Function rotateArray expects [9, 7, 6, 3, 8] and returns: ", rotateArray([3, 8, 9, 7, 6], 3)); // Expected output: [9, 7, 6, 3, 8]
console.log("Function rotateArray expects [0, 0, 0] and returns: ", rotateArray([0, 0, 0], 1)); // Expected output: [0, 0, 0]
console.log("Function rotateArray expects [1, 2, 3, 4] and returns: ", rotateArray([1, 2, 3, 4], 8)); // Expected output: [1, 2, 3, 4]

// Notes
// ------------------------------------------
//
// - The function rotateArray rotates the array A by K positions to the right.
// - It first ensures that K is within the bounds of the array length using the modulus operator.
// - The modulus operator (%) is used to handle cases where K is greater than the length of the array.
//   This ensures that rotating the array by K positions is equivalent to rotating it by K % A.length positions.
// - It then extracts the last K elements from the array using splice.
// - The splice method is used to remove the last K elements from the array and return them as a new array.
// - Finally, it concatenates the last K elements with the remaining elements to form the rotated array.
// - The function handles edge cases such as K being greater than the length of the array or the array being empty.
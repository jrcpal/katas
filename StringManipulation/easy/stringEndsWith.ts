// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Solution
// ------------------------------------------

function solution(str: string, ending: string) {
    return str.endsWith(ending)
}

// Console
// ------------------------------------------

console.log(solution('abcde', 'de'))
console.log("solution 2 expects true and returns", solution2('abcde', 'de'))

// Notes
// ------------------------------------------

// .endsWith method came out with ES6 in 2015
// Alternative solution 

function solution2(str: string, ending: string) {
    return str.slice(-ending.length) === ending
}

// slice method extracts a section of a string or an array and returns it as a new string or array without modifying the original
// slice syntax is string(or array).slice(beginIndex, endIndex) , with endIndex being optional


// Original Test
// ------------------------------------------

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(solution('abcde', 'cde'), true)
//   Test.assertEquals(solution('abcde', 'abc'), false)
//   });
//   });
  
// Instructions
// ------------------------------------------
//
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321


// Solution
// ------------------------------------------

function descendingOrder(n: number) {
    // alternative: return parseInt([...n.toString()].sort((a,b) => Number(b) - Number(a)).join(''))
    return parseInt(n.toString().split('').sort((a,b)=> Number(b)-Number(a)).join(''))
}

// Console
// ------------------------------------------
console.log('descendingOrder function should return 51 and it returns:', descendingOrder(15))



// Notes
// ------------------------------------------
//
// Both approaches are equally effiencient. Using Split method could be considered more readible. 



// Original Test
// ------------------------------------------

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(descendingOrder(0), 0)
//       assert.strictEqual(descendingOrder(1), 1)
//       assert.strictEqual(descendingOrder(111), 111)
//       assert.strictEqual(descendingOrder(15), 51)
//       assert.strictEqual(descendingOrder(1021), 2110)
//       assert.strictEqual(descendingOrder(123456789), 987654321)
//       })
//     })
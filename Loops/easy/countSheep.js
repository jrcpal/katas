// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {

    let str = "";

    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }

    return str
}

// -----------
// Console

console.log(countSheep(3));

// -----------
// Notes
// 
// Must let i start at 1 instead of 0
// Loop must include last number in argument 

// -----------
// Original Test

// describe("Fixed tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(countSheep(0), "");
//       assert.strictEqual(countSheep(1), "1 sheep...");
//       assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//       assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//     });
//   });


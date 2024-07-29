// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let difference = dadYearsOld - 2 * sonYearsOld
    return Math.abs(difference)
  }



// -----------
// Console

console.log(twiceAsOld(36, 7)) // returns 22

// -----------
// Notes
// 
// Math.abs returns the absolute value of the number, and thus converts negative numbers to positive numbers
// In this test, we calcultate how old the son will be when the son is twice his age, and then subtract the difference. In this case the son would be 14, so we subtract 36 - 14 to get 22. If they have a 22 year difference, it means in 22 years, the father will be 58, the son will be 29, and he will be twice as old. 

// -----------
// Original Test

// describe("Sample tests", function(){
//     it("Testing for dad's age: 36 and son's age: 7", function(){
//       assert.strictEqual(twiceAsOld(36,7) , 22);
//     });  
//     it("Testing for dad's age: 55 and son's age: 30", function(){
//       assert.strictEqual(twiceAsOld(55,30) , 5);
//     });
//     it("Testing for dad's age: 42 and son's age: 21", function(){
//       assert.strictEqual(twiceAsOld(42,21) , 0);
//     });
//     it("Testing for dad's age: 22 and son's age: 1", function(){
//       assert.strictEqual(twiceAsOld(22,1) , 20);
//     });
//     it("Testing for dad's age: 29 and son's age: 0", function(){
//       assert.strictEqual(twiceAsOld(29,0) , 29);
//     });
//   });
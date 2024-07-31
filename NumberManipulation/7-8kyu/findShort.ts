// Instructions
// ------------------------------------------
//
//Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution
// ------------------------------------------

function findShort(s: string) {
    return Math.min(...s.split(' ').map(w => w.length))
}

// Console
// ------------------------------------------
console.log('Function findShort expects 2 and returns: ', findShort("Let's travel abroad shall we"))



// Notes
// ------------------------------------------




// Original Test
// ------------------------------------------

//assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
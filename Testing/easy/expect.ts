// Instructions
// ------------------------------------------
//
//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Solution
// ------------------------------------------
const expect = function(val: Number) {
    const toBe = (val2: any) => {
        if (val === val2) {
            return true
        }
        throw new Error("Not Equal")
    }

    const notToBe = (val2: any) => {
        if (val !== val2) {
            return true
        }
        throw new Error("Equal")
    }

    return {
        toBe: toBe,
        notToBe: notToBe
    }
}

// Console
// ------------------------------------------
try {
    console.log('Expect 5 to be 5: ', expect(5).toBe(5)); // true
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
}

try {
    console.log('Expect 5 not to be 3: ', expect(5).toBe(null)); // "Not Equal"
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
}



// Notes
// ------------------------------------------
//



// Original Test
// ------------------------------------------
//

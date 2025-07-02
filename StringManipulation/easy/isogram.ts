// Instructions
// ------------------------------------------
//
// An isogram is a string with no duplicate letters. Create a function that returns if a string is or is not an isogram. If string is empty, return true. Case does not matter. 

// Solution
// ------------------------------------------

// Inputs are strings
// Outputs is boolean 
// yes, output can be determined with current input 

function isIsogram(str: string) {
    return new Set(str.toLowerCase()).size === str.length
}



// Console
// ------------------------------------------
console.log('Function expects true and returns: ', isIsogram("Dermatoglyphics"))
console.log('Function expects false and returns: ', isIsogram("moOse"))
console.log('Function expects true and returns: ', isIsogram(""))



// Notes
// ------------------------------------------
//
// sets do not contain duplicate elements , therefore if a string (of single case) is longer than the size of the set, it must contain duplicate elements. 


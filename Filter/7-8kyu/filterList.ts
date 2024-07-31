// Instructions
// ------------------------------------------
//
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Solution
// ------------------------------------------

function filter_list(l: any[]): number[] {
    return l.filter( elem => typeof elem == 'number')
}

function filter_list2(l: any[]): number[] {
    return l.filter(Number.isInteger)
}

// Console
// ------------------------------------------
console.log('Function filter_list expects [1,2] and returns: ', filter_list([1,2,'a','b']))

console.log('Function filter_list2 expects [1,2] and returns: ', filter_list2([1,2,'a','b']))


// Notes
// ------------------------------------------


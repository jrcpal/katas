// Instructions
// ------------------------------------------
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// Solution
// ------------------------------------------

function disemvowel(str: string) {
    return str.replace(/[aeiou]/gi, '')
}

// Console
// ------------------------------------------

console.log("The function disemvowel expects 'Hw nw brwn cw?' and returns: ", disemvowelAttempt("How now brown cow?"))


// Notes
// ------------------------------------------
//
// replace method takes in a search value, and a new value
// .replace(searchValue, newValue)
// the / / denotes a regular expression
// the [ ] creates a character set 
// the g makes it global, instead of just the first occurance
// the i makes it case Insensitive. 

// Alternative solution

function disemvowel2(str: string) {
    const vowels = 'aeiouAEIOU'
    return str.split('').filter(char => !vowels.includes(char)).join('')
}



// Original Test
// ------------------------------------------
// assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
// assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
// assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

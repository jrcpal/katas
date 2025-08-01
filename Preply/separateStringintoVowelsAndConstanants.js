// given a string
// make a function that will return an object, containing the vowels, and the constanants 
// for each key, value will be an array of letters 

function separateString(string) {
    const dictionary = {
        vowels: [],
        constanants: []
    }

    const lcStr = string.toLowerCase()
    const VOWELS = "aeiou"
    
    // iterate over the lower case string
    for (let i = 0; i < lcStr.length; i++) {
        // check if letter is a vowel or not
        VOWELS.includes(lcStr[i]) ?
            //add as a value to key of vowels in object
            dictionary.vowels.push(lcStr[i])
            // otherwise add as constanant
            : dictionary.constanants.push(lcStr[i])
    }

    return dictionary
}

console.log(separateString("Jessica"))
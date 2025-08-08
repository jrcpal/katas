// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// return a boolean
// need to check if str2 contains exactly the same letters as str1
// can rule out if not the same length
// don't need to match case in these tests

// initial thought: sort both str1 and str2, then loop through str1 (*sort works on arrays not strings)
// or create object of str1, and loop through values of str 2 and "check off" values from object to see if theres a match (*this is more efficient*)
// can use array method .every() to compare arrays (same complexity as sorting)

function validAnagramCharCode(s, t) {
    // early exit, anagrams must be the same length
    if (s.length !== t.length) return false;

    // 1. create array to count characters
    // syntax: new Array(element1, element2)
    // new Array(26) creates an empty array with length of 26 [ , , , , , etc...]
    // syntax: .fill(value, start, end)
    // .fill(0) fills the array with 0's in all of the empty 26spots
    const count = new Array(26).fill(0)

    // 2. Fill array slots with frequency of character within first string, and subtract frequency from second string
    for (let i = 0; i < s.length; i++) {
        // 'a' char code is 97, so subtract 97 to set to 0 and place within array range
        count[s.charCodeAt(i) -97]++ 
        count[t.charCodeAt(i) -97]--
    }

    // 3. Now, if anagram, all slots in array are 0
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false
    }

    return true
}

function validAnagramObjectCompare(str1, str2) {
    if (str1.length !== str1.length) return false;

    const sDict = {}

    for (let char of str1) {
        sDict[char] = (sDict[char] || 0) + 1
    }

    for (let char of str2) {
        if (!sDict[char]) return false;
        sDict[char]--
    }

    return true
}

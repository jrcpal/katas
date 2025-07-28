// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// return a boolean
// need to check if str2 contains exactly the same letters as str1
// can rule out if not the same length
// don't need to match case in these tests

// initial thought: sort both str1 and str2, then loop through str1 (*sort works on arrays not strings)
// or create hash of str1, and loop through values of str 2 and "check off" values from hash to see if theres a match (*this is more efficient*)
// can use array method .every() to compare arrays (same complexity as sorting)

function validAnagram2(str1, str2) {
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

function validAnagram1(str1, str2) {
    if (str1.length !== str1.length) return false;

    const sortedStr1 = str1.split('').sort()
    const sortedStr2 = str2.split('').sort()

    for ( let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] !== sortedStr2[i]) return false;
    }
    return true
}

function validAnagram3(str1, str2) {
    return str1.split('').sort().every((char, index) => char === str2.split('').sort()[index])
}





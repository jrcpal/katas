// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]


function groupAnagramsSortedStringsAndObjectStorage(strs) {
    const dict = {};

    for (const str of strs) {
        let sortedStr = str.split('').sort().join('')
        dict[sortedStr] = (dict[sortedStr] || []).concat(str) 
    }

    return Object.values(dict)
}
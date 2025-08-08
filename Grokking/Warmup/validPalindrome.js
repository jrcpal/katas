// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: sentence = "A man, a plan, a canal, Panama!"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome

function validPalindromeRegexClean(s) {
  let cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log("cleaned", cleaned);
  return (
    cleaned ===
    s
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}

//console.log(validPalindromeRegexClean("A man, a plan, a canal, Panama!"));

function validPalindromeTwoPointers(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  if (str.length <= 1) return true;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(validPalindromeTwoPointers("A man, a plan, a canal, Panama!"));
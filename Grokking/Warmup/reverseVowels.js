// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function reverseVowelsTwoPointers(string) {
  const VOWELS = "aeiouAEIOU";
  const str = string.split("");

  // define two pointers
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    while (left < right && !VOWELS.includes(str[left])) left++;
    while (left < right && !VOWELS.includes(str[right])) right--;
    if (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    }
  }
  console.log(str.join(""));
}

function reverseVowelsREGEX(str) {
  const vowels = str.match(/[aeoiu]/gi) || [];
  return str.replace(/[aeoiu]/gi, () => vowels.pop());
}

function reverseVowelsStringMethods(str) {
  const VOWELS = "aeiouAEIOU";
  const vows = str.split("").filter((letter) => VOWELS.includes(letter));
  const cons = str.split("").filter((letter) => !VOWELS.includes(letter));

  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      result.push(vows.pop());
    } else {
      result.push(cons.shift());
    }
  }

  return result.join("");
}

function reverseVowelsStoreInArray(string) {
  const VOWELS = "aeiouAEIOU";
  const str = string.split("");
  const vowelsArr = [];

  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      vowelsArr.unshift(str[i]);
    }
  }

  let vowelsArrIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      str[i] = vowelsArr[vowelsArrIndex];
      vowelsArrIndex++;
    }
  }

  console.log(str.join(""));
}

reverseVowelsTwoPointers("Hello");
reverseVowelsStoreInArray("Hello");

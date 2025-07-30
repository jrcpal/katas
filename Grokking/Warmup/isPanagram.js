// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.

// Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.

// input: string (may contain digits and spaces)
// output: boolean
// check case: if sentence is less than 26 characters, must be false
// check case: should lowercase all characters 

// initial approach , create hash map of alphabet by looping through an array, then set value of letter by looping through sentence
// another thought: obviously regex is awesome, but I always forget how to use it 
// refactored approach: because i'm checking unique letters in alpabet, using set and adding characters to the set is the best approach

function checkIfPangramSetAndForOfLoop(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letters = new Set();

  for (const char of sentence.toLowerCase()) {
    if (alphabet.includes(char)) {
      letters.add(char);
    }
    if (letters.size === 26) return true;
  }
  return letters.size === 26;
}

function checkIfPangramSetAndForLoop(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lettersSeen = new Set();

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i].toLowerCase();

    if (alphabet.includes(letter)) {
      lettersSeen.add(letter);
    }

    if (lettersSeen.size === 26) return true;
  }
  return lettersSeen.size === 26;
}

function checkIfPangramSetAndStringCheckAndForOfLoop(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  const lettersSeen = new Set();

  for (const char of lowerCaseSentence) {
    if (char >= "a" && char <= "z") lettersSeen.add(char);
    if (lettersSeen.size === 26) return true;
  }
  return lettersSeen.size === 26;
}

function checkIfPangram3(sentence) {
    // .replace(/[^a-z]/g, '') replaces all non-letter characters 
  return new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}

function checkIfPangram1(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const cleanSentence = sentence.toLowerCase()
    const dict = {} 

    for (const char of alphabet) {
        dict[char] = false
    }

    for (const char of cleanSentence) {
      if (alphabet.includes(char)) {
        dict[char] = true;
      }
    }

    for (const char in dict) {
      if (dict[char] === false) return false
    }

    return true
  }


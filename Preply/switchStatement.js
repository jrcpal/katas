// ❓ Question:
// Write a function called dayActivity(day) that takes a day of the week as a string (e.g., "Monday", "Friday") and returns an activity for that day. Use a switch statement to decide the activity:
// Monday → "Gym workout"
// Tuesday → "Study JavaScript"
// Wednesday → "Grocery shopping"
// Thursday → "Go for a run"
// Friday → "Watch a movie"
// Saturday → "Hang out with friends"
// Sunday → "Rest and relax"
// If the day does not match any of these, return "Invalid day".

function dayActivity(day) {
    let message = ""
    switch(day) {
        case "Monday": 
            message = "Gym workout"
            break;
        case "Tuesday":
            message = "Study Javascript"
            break;
        default:
            message = "Invalid day"
    }

    console.log(message)
}

//dayActivity("today")


// Create a function that makes use of the temperature value to determine what clothes to wear using switch statements

function seasonal(temp) {
    let message = ""
    
    switch(true) {
        case temp <= 32: 
            message = "Wear a heavy coat!"
            break;
        case temp > 32 && temp <= 50: 
            message = "Wear a jacket"
            break;
        case temp > 50 && temp <= 70:
            message = "Wear a sweater"
            break;
        case temp > 70 && temp <= 85:
            message = "Just need a tshirt"
            break;
        case temp > 85:
            message = "It's hot!"
            break;
        default:
            message = "Please check the temp."
    }

    console.log(message)
}

//seasonal(51)

// Valid Almost-Palindrome
// Write a function that takes a string and returns true if it is a palindrome or can become a palindrome by removing at most one character. Otherwise, return false.
// Example
// almostPalindrome("abca");
// Output: true (remove 'b' or 'c' → "aca" or "aba")



function isPalindrome(str) {
    let left = 0
    let right = str.length - 1 

    // 'acbc'

    while (left < right) {
        if (str[left] !== str[right]) {
            console.log(false)
            return false
        } else {
            left++
            right++
        }
    }
    console.log(true)
    return true 
}

isPalindrome('acbc')
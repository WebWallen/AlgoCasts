// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // Initialize and assign an empty count variable
    let count = 0;
    // Specify we are interested in checking for vowels
    let vowelChecker = ['a', 'e', 'i', 'o', 'u'];
    // For each character in our lowercased string...
    for (let char of str.toLowerCase()) {
        // If the character is included in our vowel checker
        if (vowelChecker.includes(char)) { 
            // Increment and reassign count
            count += 1;
        }
    }
    return count;
}

function vowelsRegex(str) {
    // Call match method on input string, attach regular expression containing global/case insensitive vowels, and assign to matches
    const matches = str.match(/[aeiou]/gi)
    // If there are matches, return the amount (length) of them; otherwise, return 0
    return matches ? matches.length : 0;
}

console.log(vowelsRegex('Doggos are the best'))
module.exports = vowels;

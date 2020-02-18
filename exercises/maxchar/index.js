// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Other questions to expect that are like this one:
// 1. What is the most common character in the string?
// 2. Does string A have the same characters as string B?
// 3. Does the given string have any repeated characters?

function maxChar(str) {
    // Essentially, we want to create an object that stores each character as a key and its count as a value
    const charCount = {};
    // Set ourselves up with two helper variables that will be used in comparison operations later
    let max = 0;
    let maxChar = '';
    // For each character inside the input string...
    for (let char of str) {
        // Place each char inside the object as a [key] and assign the count value as 1 (first instance) or +1 (nth instances)
        charCount[char] = 1 || charCount[char] + 1
    }
    // For each entry in the chars object (GOTCHA: ironically they chose not to use O for Objects... for IN, not of)
    for (let char in charCount) {
        // If the character count value associated with this entry is greater than the current max...
        if (charCount[char] > max) {
            // Assign this entry to the max variable
            max = charCount[char]; 
            // Assign the character itself to the maxChar variable
            maxChar = char;  
        }
    }
    // Return the character with the most occurences
    return maxChar; 
}
console.log(maxChar('Bat Mite'));
console.log(maxChar('Mister Mxyzptlk'));

module.exports = maxChar;

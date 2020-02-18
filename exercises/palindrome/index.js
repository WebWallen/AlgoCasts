// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // Reverse the string
    const reversed_str = str.split('').reverse().join('');
    // If the reversed string equals the input, it will return true
    return reversed_str === str;
}

function palindrome_every_helper(str) {
    // For every character and its attached index inside this split string...
    return str.split('').every((char, idx) => { // Potential Gotcha: gotta return method or it won't do anything
        // Return a comparison operator to test whether current character (char) is same as the one on opposite side
        return char === str[str.length - idx - 1]
    })
}

console.log(palindrome_every_helper('ABCBA'));
console.log(palindrome_every_helper('ABCDE'));

module.exports = palindrome;

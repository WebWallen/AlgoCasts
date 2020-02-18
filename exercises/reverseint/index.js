// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // Don't forget you always have to pass 'quote marks' into split and join and add toString when working with numbers
    const reversedStrNum = n.toString().split('').reverse().join('');
    // If the original number is less than 0, convert the reversed string to a number; with parseInt and multiply by -1
    if (n < 0) return -1 * parseInt(reversedStrNum);
    // If the input is greater than 0, simply convert the reversed string ito a number and return
    else return parseInt(reversedStrNum);
}

function reverseIntShortcut(n) {
    const reversedNumStr = n.toString().split('').reverse().join('');
    // Math.sign multiplies number by 1 if positive and -1 if negative
    return parseInt(reversedNumStr) * Math.sign(n);
}

console.log(reverseIntShortcut(-90));
console.log(reverseIntShortcut(981));
console.log(reverseIntShortcut(500));

module.exports = reverseInt;

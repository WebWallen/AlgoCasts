// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 1. Turn string into an array
    const arr = str.split('');
    // 2. Call reverse on the array
    arr.reverse();
    // 3. Convert array back to a string
    const reversed_str = arr.join('');
    // 4. Return the reversed string
    return reversed_str;
}

function reverse_in_one_line(str) {
    // Splits string into array, reverses array, and joins back into a string
    return str.split('').reverse().join('');
}
console.log('Simple reverse with JS methods: ', reverse_in_one_line('otac'));

function reverse_with_for_loop(str) {
    // 1. Create an empty string called "reversed"
    let reversed = '';
    // 2. For each character in the string...
    for (let character of str) {
    // 3. ...take the character and add to start of "reversed"
        reversed = character + reversed; // (Each character is placed in front of other letters in reversed; and thus, it is... well... reversed)
    } // 4. Return the variable reversed
    return reversed;
}
console.log('Reverse with for loop: ', reverse_with_for_loop('dog'));

function reverse_with_reduce(str) {
    // Empty string at the end is there because reduce requires starting value for the accumulator (rev)
    return str.split('').reduce((rev, char) => char + rev, '')
}
console.log('Fancy reverse with reduce: ', reverse_with_reduce('god'));

module.exports = reverse;

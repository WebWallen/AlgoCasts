// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize_two(str) {
    // Initialize an empty array to hold our soon-to-be-formatted words
    const words = [];
    // Split the input string, add spaces in between (' '), and loop through each word created
    for (let word of str.split(' ')) {
        console.log(word); // Notice the effect of adding a space inside our split method in the console
        // Uppercase the first letter of each word, add its sliced remainder back, and assign to capitalized_word
        capitalized_word = word[0].toUpperCase() + word.slice(1); // Slices from position 1 and includes the rest
        // Push each capitalized word onto the storage (words) array
        words.push(capitalized_word);
    }
    // Use the join method to turn our array back into a string and return the result (don't forget to add a space so we can preserve original format)
    return words.join(' ');
}
// console.log(capitalize('dog is god'))

function capitalize(str) {
    // Intialize a result variable and assign the capitalized first letter
    let result = str[0].toUpperCase();
    // Note: can't use "for of" because it automatically loops through every character and we want to skip the first one
    for (let i = 1; i < str.length; i++) {
        // If the character to the left is a space (index minus one)...
        if (str[i - 1] === ' ') {
            // Uppercase the index letter, add to result, and reassign result
            result = result + str[i].toUpperCase();
        } else {
            // Add the (lowercased) index letter to result and reassign
            result = result + str[i];
        }
    }
    // Return the newly capitalized result
    return result;
}

console.log(capitalize('cats are weapons of mass destruction'))

module.exports = capitalize;

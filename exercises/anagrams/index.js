// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB); 
}

function cleanString(str) {
    // Replace the input string with a lowercased version that's split into an array, sorted in order, and joined back together
    return str.replace(/[^\w/]/g, '').toLowerCase().split('').sort().join('');
}

console.log('Much simpler anagram test: ', anagrams('There! Hello!', "Hello! There!"));

function anagramsWithHelperFun(stringA, stringB) {
    // Call helper function on both strings to create a properly formatted character map for each
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
    // If the char map objects don't have the same amount of keys, then they can't possibly be an anagram, so return false
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
    // For each character in the first char map...
    for (let char in charMapA) {
        // Compare its count value with the second char map; if they aren't equal, return false
        if (charMapA[char] !== charMapB[char]) return false;
    }
    // The conditional tests passed, so return true
    return true;
}

function buildCharMap(str) {
    // Initialize an empty object and assign to charMap
    const charMap = {};
    // For each character in the string: remove spaces + special characters, replace them with nothing (""), and lowercase the letters
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = 1 || charMap[char] + 1;
    }
    return charMap;
}
console.log(anagramsWithHelperFun('hello', 'ohell'))

function faultyAnagramFun(stringA, stringB) {
    const stringObjA = {};
    const stringObjB = {};
    if (stringA.length !== stringB.length) return false;
    for (let char of stringA) stringObjA[char] = 1 || stringObjA[char] + 1;
    for (let char of stringB) stringObjB[char] = 1 || stringObjB[char] + 1;
    for (let charA in stringObjA) {
        for (let charB in stringObjB) {
            charA = RegExp(/[^\w]/g, "");
            charB = RegExp(/[^\w]/g, "");
            if (stringObjA[charA] === stringObjB[charB]) {
                return true;
            }
        }
    }
}

module.exports = anagramsWithHelperFun;

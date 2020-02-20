// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // Calculate the midpoint and assign to a variable
    const midpoint = Math.floor((2 * n - 1) / 2);
    // For each row with a smaller value than n...
    for (let row = 0; row < n; row++) {
        // Assign an empty string to level
        let level = '';
        // For each column with a smaller value than the midpoint...
        for (let column = 0; column < (2 * n - 1); column++) {
            // If the column value is greater than or equal to (midpoint - row) and less than or equal to the row value...
            if (midpoint - row <= column && midpoint + row >= column) {
                // Add a block (#) to the pyramid level
                level += '#';
            // Otherwise...
            } else {
                // Add an space
                level += ' ';
            }
        }
        console.log(level);
    }
} 
pyramid(3);


function pyramidRecursive(n, row = 0, level ='') {
    if (row === n) return
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;

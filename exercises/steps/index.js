// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // For each row that's less than n...
    for (let row = 0; row < n; row++) {
        // Assign an empty string to stair
        stair = '';
        // For each column of that's less than n...
        for (let column = 0; column < n; column++) {
            // If the column is equal to or less than the row...
            if (column <= row) stair += '#'; // ...add a step (#) to the staircase
            else stair += ' '; // If the column is greater than row, add a space to the staircase
        }
        // After the inner loop is complete, print each stair (inside outer loop so we can four print statements)
        console.log(stair);
    }
}

// Good practice to use default values for arguments on recursive functions (lowers risk of infinite loops)
function steps_recursive(n, row = 0, stairs = '') {
    // Base case: if n equals the row value, return
    if (n === row) return;
    // If n is equal to the amount of stairs...
    if (n === stairs.length) {
        // Print the stairs
        console.log(stairs);
        // Return a recursive call and increment row
        return steps_recursive(n, row + 1);
    }
    // If we haven't reached the row value, add steps (#) until we have
    if (stairs.length <= row) stairs += '#';
    // Otherwise, add an empty strength
    else stairs += ' ';
    // Recursively call the function until n equals row
    steps_recursive(n, row, stairs);
}

steps_recursive(5);

module.exports = steps;

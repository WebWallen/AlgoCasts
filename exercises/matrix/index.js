// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = [];
    // For each result in the results array...
    for (let i = 0; i < n; i++) {
        // Push an empty array inside results
        results.push([]);
    }

    // Initialize a counter variable, assign 1
    let counter = 1;

    // Initialize and assign variables for the matrix areas we need to manipulate
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    // While the end column and row are greater than or equal to start column and row
    while (startColumn <= endColumn && startRow <= endRow) {
        // For each value in the first row...
        for (let i = startColumn; i <= endColumn; i++) {
            // Attach starting row index to results and assign to counter
            results[startRow][i] = counter;
            // Increment the counter [1, 2, 3]
            counter ++;
        }
        // Increment the start row
        startRow++;

        // For each value in the right column...
        for (let i = startRow; i <= endRow; i++) {
            // Attach index of end column to results and assign to counter
            results[i][endColumn] = counter;
            // Increment the counter [1, 2, 3]
            //                              4]
            //                              5]
            counter++;
        }
        // Decrement the end column
        endColumn--;

        // For each value in the bottom row...
        for (let i = endColumn; i >= startColumn; i--) {
            // Attach end row index to results and assign to counter
            results[endRow][i] = counter;
            // Increment the counter [1, 2, 3]
            //                              4]
            //                       [7, 6, 5]
            counter++;
        }
        // Decrement the end row
        endRow--;

        // For each value in the start column...
        for (let i = endRow; i >= startRow; i--) {
            // Attach index of start column to results and assign to counter
            results[i][startColumn] = counter;
            // Increment the counter [1, 2, 3]
            //                       [8,    4]
            //                       [7, 6, 5]
            counter++;
        }
        // Increment the start column
        startColumn++;
        // Return the first for loop to fill in last value, 9
        // The start row was incremented so second row gets that logic
    }
    return results;
}

module.exports = matrix;

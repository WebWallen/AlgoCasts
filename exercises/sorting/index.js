// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Find largest element and drag it to the right side
function bubbleSort(arr) {
    // Iterates over each index (outer)
    for (let i = 0; i < arr.length; i++) {
        // Iterates over the value (-1) on index (inner)
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // If this value is greater than the next one...
            if (arr[j] > arr[j + 1]) {
                // Assign the lesser value to a variable
                const lesser = arr[j + 1]
                // Increment the counter and assign to j
                arr[j + 1] = arr[j];
                // Reassign current index (j) to lesser to continue loop
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

// The "prove me wrong" algorithm
function selectionSort(arr) {
    // Outer loop to iterate through entire array
    for (let i = 0; i < arr.length; i++) {
        // Assume i is the lowest, assign that index to indexOfMin
        let indexOfMin = i;
        // Validate the above assumption with our inner loop (i+1)
        for (let j = i + 1; j < arr.length; j++) {
            // If value at index j is less than indexOfMin value...
            if (arr[j] < arr[indexOfMin]) {
                // Reassign index j as the new indexOfMin
                indexOfMin = j;
            }
        }
        // If i isn't the smallest index (needs to be reassigned)...
        if (indexOfMin !== i) {
            // Assign the value associated with indexOfMin to lesser
            let lesser = arr[indexOfMin];
            // Reassign value of indexOfMin to i (restarts loop)
            arr[indexOfMin] = arr[i];
            // Point index i to lesser (completes the swap)
            arr[i] = lesser;
        }
    }
    return arr;
}

// Split the array into as small of a chunk as possible
function mergeSort(arr) {
    // If there's only one element in the array...
    if (arr.length === 1) {
        // Return because it can't be divided anymore
        return arr;
    }
    // Divide floor of length by 2 and assign to center
    const center = Math.floor(arr.length / 2);
    // Slice 0 index to element before center and assign to left
    const left = arr.slice(0, center);
    // Slice center index plus the rest and assign to right
    const right = arr.slice(center);
    // Recursively call mergeSort on left and right to divide
    return merge(mergeSort(left), mergeSort(right));
    // Returned and passed to merge, which puts together/sorts in order
}

// Recursively join pairs back together
function merge(left, right) {
    // create an empty array to hold results
    const results = [];
    // While both sides have elements inside...
    while (left.length && right.length) {
        // If first element on left is smaller than first on right...
        if (left[0] < right[0]) {
            // Push the left element into results
            results.push(left.shift());
        // Otherwise (element on left is bigger than element on right)...
        } else {
            // Push the right element into results
            results.push(right.shift());
        }
    }
    // Join any stray elements and place them in right order
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

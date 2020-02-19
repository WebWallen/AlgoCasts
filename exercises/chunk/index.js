// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Create an empty array to hold chunks (subarrays) and assign to chunked
    const chunked = [];
    // For each element of the original input (unchunked) array...
    for (let element of array) {
        // Retrieve the last element in the chunked array and assign to last
        let last = chunked[chunked.length - 1];
        // If the last element doesn't exist or its length is equal to chunk size limit
        if (!last || last.length === size) {
            // Push the new chunk's [zero index] into the chunked array
            chunked.push([element]);
        }
        // Otherwise...
        else {
            // Push the current element into the forming chunk (last)
            last.push(element);
        }
    }
    // Return the chunked array
    return chunked;
}

function chunkSlice(array, size) {
    // Create empty array and assign to chunked
    const chunked = [];
    // Create an index starting at 0
    let idx = 0;
    // While the index is less than array's length
    while (idx < array.length) {
        // Slice a chunk from the original array that goes from its index (start) to the size (stop) and assign to subarray
        let subarray = array.slice(idx, idx + size);
        // Push the subarray chunk into the chunked (master) array
        chunked.push(subarray);
        // Add the subarray size to index, reassign, and restart the while loop at the next unchecked index
        idx = idx + size;
    }
    // Return the chunked array (would just return chunked in practice but using forEach for the purpose of demonstration)
    return chunked.forEach(chunk => console.log(chunk))
}

console.log(chunkSlice([1, 2, 3, 4, 5, 6, 7, 8], 3))

module.exports = chunk;

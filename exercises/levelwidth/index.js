// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // Initialize counters array to hold length of each level, set 0 as initial value
    let counters = [0];
    // Initialize another array with root node and a value that says "stop"
    const arr = [root, 'stop'];
    // While there are more nodes in the array (don't count stop)...
    while (arr.length > 1) {
        // Take the first element out of the array
        const node = arr.shift()
        // If we hit the stopper variable...
        if (node === 'stop') {
            // End of the row, so push 0 to restart loop with a fresh counter
            counters.push(0); 
            // Add stop back to the end of our array to complete the restart
            arr.push('stop');
        // Otherwise (it's a node we need to check)...
        } else {
            // Push (spread) node's children in front of our array...
            arr.push(...node.children);
            // Find the last value [-1] in counters and increment by one
            counters[counters.length - 1]++;
        }
    }
     // After the loop is complete, return the counters for each level of tree
     return counters;
}

module.exports = levelWidth;

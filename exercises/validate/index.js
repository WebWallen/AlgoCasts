// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Key to validate: root node = max on the left + min on the right... updates with current node on each recursive call to test the rest of our tree
function validate(node, min = null, max = null) {
    // If the max doesn't equal null and data is over max...
    if (max !== null && node.data > max) {
        // Handles critical errors on left
        return false;
    }
    if (min !== null && node.data < min) {
        // Handles right side errors
        return false;
    }
    // If there's a node to the left and validate returns false...
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    // If there's a node on the right and validate returns false...
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    // If all these tests verify our input is 100% okday...
    return true;
}

module.exports = validate;

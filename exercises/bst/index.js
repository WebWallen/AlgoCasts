// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        // Assign left and right to null as default just in case no children
        this.left = null;
        this.right = null;
    }
    insert(data) {
        // If the input data is less than current node *and* there's a branch on the left...
        if (data < this.data && this.left) {
            // Recursively call same function on the left
            this.left.insert(data);
        // If input data is less than current and nothing's on the left...
        } else if (data < this.data) {
            // Create new node and place on the left
            this.left = new Node(data);
        }
        // If the input data is greater than current node *and* there's a branch on the right...
        if (data > this.data && this.right) {
            // Recursively call same function on the right
            this.right.insert(data);
        }
        // If input data is greater than current and nothing's on the right...
        else if (data > this.data) {
            // Create new node and place on the right
            this.right = new Node(data);
        }
    }
    contains(data) {
        // If the input data is less than current node *and* there's a branch on the left...
        if (this.data === data) {
            // Return *this* node that's associated with the data
            return this;
        }
        if (this.data > data && this.left) {
            // Recursively call + return the function again
            return this.left.contains(data)
        }
        if (this.data < data && this.right) {
            // Recursively call + return the function again
            return this.right.contains(data);
        }
        // Tests failed, return null
        return null;
    }
}

module.exports = Node;

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        // Create/assign new node containing input datas
        const node = new Node(data);
        // Push the node into its parent's children property
        this.children.push(node);
    }
    remove(data) {
        // Filter out the children nodes containing data to be removed
        this.children = this.children.filter(node => node.data !== data);
        // Note: have to reassign this.children because filter makes a new array by default
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    // Breadth first example: organization hierarchy
    traverseBF(fn) {
        // Pull out the root and stick inside array
        const arr = [this.root];
        // While the array contains more nodes...
        while (arr.length) {
            // Take the first element out of the array
            const node = arr.shift();
            // Push (spread) the node's children to end of our array (queue)
            arr.push(...node.children);
            // Call the function on node we're looking at
            fn(node);
        }
    }
    // Depth first example: maze
    traverseDF(fn) {
        // Pull out array and stick inside array
        const arr = [this.root];
        // While the array contains more nodes...
        while (arr.length) {
            // Take the first element out of the array
            const node = arr.shift();
            // Place (spread) node's children in front of our array (stack)
            arr.unshift(...node.children);
            // Call the function on node we're looking at
            fn(node);
        }
    }
}

module.exports = { Tree, Node };

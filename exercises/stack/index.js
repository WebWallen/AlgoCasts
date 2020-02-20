// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        // Add to front of line (FIFO)
        this.data.push(record);
    }

    pop() {
        // Remove front item
        return this.data.pop();
    }

    peek() {
        // Return the top item without popping it (to confirm defined)
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;

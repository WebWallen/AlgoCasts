// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    // Must use constructor to initialize any data structure in JS
    constructor() {
        // Objects always require the this. syntax -- used on empty array
        this.data = [];
    }

    add(record) {
        // Add to the BACK of queue
        this.data.unshift(record);
    }

    remove() {
        // Remove from the FRONT of queue
        return this.data.pop();
    }
}

module.exports = Queue;

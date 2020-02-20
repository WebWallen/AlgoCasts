// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        // Assign the two stacks within our constructor (where data is created)
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        // Push each record into our first stack
        this.first.push(record);
    }

    remove() {
        // While there are records to be peeked in the first stack...
        while (this.first.peek()) {
            // Pop the record from first stack and push to second
            this.second.push(this.first.pop());
        }
        // Pop the record from our second stack (now it follows LIFO)
        const record = this.second.pop();
        // While there are records to be peeked in the second stack...
        while (this.second.peek()) {
            // Restore origial structure by popping from 2, pushing to 1
            this.first.push(this.second.pop());
        }
        // Return the record after restoring initial state
        return record;
    }

    // Exactly the same as remove, except we are peeking (not popping)
    peek () { 
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        // Note this is a peek, not a pop
        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
}

module.exports = Queue;

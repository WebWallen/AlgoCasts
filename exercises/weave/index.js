// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    // Initialize a new queue to store both inputs and assign to combined
    const combined = new Queue();
    // While we can "peek" and see an element at the end of either queue...
    while (sourceOne.peek() || sourceTwo.peek()) {
        // If we can peek an item on source one (must confirm due to OR above -- one or the other could be undefined)...
        if (sourceOne.peek()) {
            // Add it to our combined queue
            combined.add(sourceOne.remove())
        }
        // Repeat the same process for our second source queue
        if (sourceTwo.peek()) {
            combined.add(sourceTwo.remove());
        }
    }
    return combined;
}

module.exports = weave;

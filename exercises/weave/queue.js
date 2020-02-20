// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    // Add to back of line (LIFO)
    this.data.unshift(record);
  }

  remove() {
    // Remove front item (same as stack -- just a different term)
    return this.data.pop();
  }

  peek() {
    // This would just be [-1] in Python
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;

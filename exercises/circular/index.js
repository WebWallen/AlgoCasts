// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // Assign the same two counters from midpoint exercise
    let slow = list.head;
    let fast = list.head;
    // While fast has a next node in following two positions
    while (fast.next && fast.next.next) {
        // Increment slow +1
        slow = slow.next;
        // Increment fast +2
        fast = fast.next.next;
        // If slow and fast are equal
        if (slow === fast) {
            // It's a circular loop, so return true
            return true;
        } 
    }
    // Otherwise, they never occupy same node at the same time, so return false
    return false;
}

module.exports = circular;

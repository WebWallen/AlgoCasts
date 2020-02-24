// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// Problem Solving Strategy with Linked Lists:
// 1. Two temporary variables (slow and fast)
// 2. Assign both variables to the first node
// 3. After each loop, +1 slow and +2 fast
// 4. Check to see if the next 2 nodes exist
// 5. Slow is pointing at midpoint when they don't
function midpoint(list) {
    // Create two temporary counter variables: slow and fast
    let slow = list.head;
    // Assign both slow and fast to the LL's head
    let fast = list.head;
    // While fast has a next node in the follow two positions...
    while (fast.next && fast.next.next) {
        // Increment slow by one
        slow = slow.next;
        // Increment fast by two
        fast = fast.next.next;
    }
    // When fast stops being able to increment, slow is midpoint
    return slow;
}

module.exports = midpoint;

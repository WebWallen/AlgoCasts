// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // Assign the same counter variables from circular/midpoint
    let slow = list.head;
    let fast = list.head;
    // While the input n is greater than 0...
    while (n > 0) {
        // Move fast n-spaces forward
        fast = fast.next;
        // Decrement n until we've reached n-position
        n--;
        // Note: fast is now n-spaces in front of slow!
    }
    while (fast.next) {
        // Increment both slow and fast by one
        slow = slow.next;
        fast = fast.next;
    }
    // Return slow (has to be n-spaces behind fast now)
    return slow;
}

module.exports = fromLast;

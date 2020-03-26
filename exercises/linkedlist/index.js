// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// All this needs to know is head, contrains next reference to rest
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Create brand new node with data, insert to head
    // An INSERT method, not an OVERWRITE method
    // Insert new node and repair head reference
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // Iterate through the LL and increment counter variable
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // First node is the head, simply return it
    getFirst() {
        return this.head;
    }

    getLast() {
        // No head, no last, return null
        if (!this.head) return null;

        let current = this.head;

        while (current) {
            // Conditional must come before loop!
            // No next ref means it is last node
            if (!current.next) return current;
            current = current.next;
        }
    }

    // LL only knows about head, make it null and rest vanish
    clear() {
        this.head = null;
    }

    // Reassign head property to next so it points at 2nd node
    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    // Use previous/current pointers to remove last reference
    removeLast() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let current = this.head.next;

        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    // Find current last and add new node as current's next
    insertLast(data) {
        let last = this.getLast();
        if (last) last.next = new Node(data);
        else this.head = new Node(data);
    }

    // Return entire node associated with a given index
    getAt(index) {
        let count = 0;
        let current = this.head;

        while (current) {
            if (count === index) return current;
            count++;
            current = current.next;
        }

        return null;
    }

    // Requires many more edge cases in case of errors
    removeAt(index) {
        // No nodes
        if (!this.head) return;
        // Removing index 0 (doesn't mean no elements, removing first)
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // Selecting previous node
        let previous = this.getAt(index - 1);
        // Error handling for index outside of LL range
        if (!previous || !previous.next) return;
        // Passed all the error handling nexts, so increment
        previous.next = previous.next.next;
    }

    // Not overwriting any data, merely repairing connections
    insertAt(data, index) {
        // No nodes
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        // Zero index
        if (index === 0) {
            this.head = new Node(data, this.head);
        }

        // Insert anywhere in middle
        // Second part is for handling insertion at the end
        let previous = this.getAt(index - 1) || this.getLast();
        let current = new Node(data, previous.next);
        previous.next = current;

        // Out of bounds
        if (!previous || previous.next); 
    }
}

//     // Insert the node at a given index
//     insertAt(data, index) {
//         if (!this.head) {
//             this.head = new Node(data);
//             return;
//         }
//         if (index === 0) {
//             // Node class has next node prop = use to scoot previous head
//             this.head = new Node(data, this.head);
//             return;
//         }
//         // Get the previous index; if no previous, get last node
//         const previous = this.getAt(index - 1) || this.getLast();
//         // Assign the new node and point to the previous' next
//         const node = new Node(data, previous.next);
//         // Modify the previous' next so it points to new node
//         previous.next = node;
//     }

//     // Interview Pro-Tip: ask if it's okay to condense methods by using them in a generic, multi-purpose way
//     intertFirstB(data) {
//         this.insertAt(data, 0);
//     }

//     getFirstB() {
//         return this.getAt(0);
//     }

//     getLastB() {
//         return this.getAt(this.size() - 1);
//     }

//     // Generator Content Below = bonus/optional, would need further research

//     forEach(fn) {
//         let node = this.head;
//         let counter = 0;
//         while (node) {
//             fn(node, counter);
//             node = node.next;
//             counter++;
//         }
//     }

//     *[Symbol.iterator]() {
//         let node = this.head;
//         while (node) {
//             yield node;
//             node = node.next;
//         }
//     }
// }

module.exports = { Node, LinkedList };

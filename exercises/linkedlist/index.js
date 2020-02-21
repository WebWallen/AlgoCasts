// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        // Default data storage property for attached value
        this.data = data;
        // Points to next node on LL (unless tail, then null)
        this.next = next;
    }
}

class LinkedList {
    // All this knows by default (without method) is the head
    constructor() {
        // Head is stored with list.head = Node(1)
        this.head = null;
    }
    // insertFirst adds a node to front of LL
    insertFirst(data) {
        // Create new node, assign to head, pass in previous head as next
        this.head = new Node(data, this.head);
    }
    // Find the size of LL
    size() {
        // Initialize empty count variable
        let count = 0;
        // Assign current head to node
        let node = this.head;
        // While there is a node...
        while (node) {
            // Increment count +1
            count++;
            // Reassign node to next node
            node = node.next;
        }
        // Once tail is reached, return count
        return count;
    }
    // Get first node in LL
    getFirst() {
        // Return the head
        return this.head;
    }
    // Get last node in LL
    getLast() {
        // If there's no head (or any nodes), return null
        if (!this.head) return null;
        // Assign current node to head
        let node = this.head;
        // While there is a node...
        while (node) {
            // If there isn't a next node, return node (tail)
            if (!node.next) return node;
            // Increment and reassign node until we reach end
            node = node.next;
        }
    }
    // Clear the linked list of all nodes
    clear() {
        // Head is only way it's aware of other nodes, so make it null
        this.head = null;
    }
    // Remove the first node (head) from our LL
    removeFirst() {
        // If there's not head, just return (nothing to remove)
        if (!this.head) return;
        // Assign current head to the next node to turn into new head
        this.head = this.head.next;
    }
    // Remove the last node (tail) from our LL
    removeLast() {
        // If the list is completely empty, exit (return)
        if (!this.head) return;
        // If the list only has one node...
        if (!this.head.next) {
            // Reassign the head as null
            this.head = null;
            // Return (exit) the function
            return;
        }
        // Otherwise, assign some placeholder variables to iterate with
        let previous = this.head;
        let node = this.head.next;
        // While there is a next node...
        while (node.next) {
            // Increment each variable (moves each to the right one space)
            previous = node;
            node = node.next;
        }
        // When the node reaches the end of the line, set previous.next to null
        previous.next = null;
        // Above effectively deletes the last node by removing the pointer to it
    }
    // Insert a new tail to the end of our LL
    insertLast(data) {
        // Get the last node and assign to last
        const last = this.getLast();
        // If there are nodes to check...
        if (last) {
            // Assign the new node to previous tail's next
            last.next = new Node(data);
        }
        else {
        // Otherwise, assign the new node to head (LL is empty)
            this.head = new Node(data);
        }
    }
    // Get the node at a given index (starting at 0)
    getAt(index) {
        // Assign empty counter variable
        let counter = 0;
        // Assign head to current node
        let node = this.head;
        // While there are node...
        while (node) {
            // If we're reached the index
            if (counter === index) {
                // Return the node
                return node;
            }
            // Otherwise, increment counter
            counter++;
            // Add next to node and loop
            node = node.next;
        }
        // Didn't find the index, so return null
        return null;
    }
    // Remove the node at a given index
    removeAt(index) {
        // Empty list = return
        if (!this.head) return;
        // If index is the head...
        if (index === 0) {
            // Remove by assigning head to next
            this.head = this.head.next 
            // Exit function
            return;
        }
        // Get the previous node (index - 1)
        const previous = this.getAt(index - 1);
        // If there's not a previous node or one at index position, return (nothing to remove)
        if (!previous || !previous.next) return;
        // Otherwise, update the previous' pointer so it skips removed index (add an extra next)
        previous.next = previous.next.next;
    }
    // Insert the node at a given index
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            // Node class has next node prop = use to scoot previous head
            this.head = new Node(data, this.head);
            return;
        }
        // Get the previous index; if no previous, get last node
        const previous = this.getAt(index - 1) || this.getLast();
        // Assign the new node and point to the previous' next
        const node = new Node(data, previous.next);
        // Modify the previous' next so it points to new node
        previous.next = node;
    }

    // Interview Pro-Tip: ask if it's okay to condense methods by using them in a generic, multi-purpose way
    intertFirstB(data) {
        this.insertAt(data, 0);
    }

    getFirstB() {
        return this.getAt(0);
    }

    getLastB() {
        return this.getAt(this.size() - 1);
    }

    // Generator Content Below = bonus/optional, would need further research

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

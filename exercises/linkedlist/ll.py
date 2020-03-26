class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, head):
        self.head = head

    def insert_first(self, data):
        self.head = Node(data)

    def size(self):
        count = 0
        current = self.head

        while current:
            count += 1
            current = current.next

        return count

    def get_first(self):
        return self.head

    def get_last(self):
        if self.head is None:
            return

        current = self.head
        while current:
            if current.next is None:
                return current
            current = current.next

    def clear(self):
        self.head = None

    def remove_first(self):
        if self.head is None:
            return
        self.head = self.head.next

    def remove_last(self):
        # No head
        if self.head is None:
            return

        # Only head
        if self.head.next is None:
            self.head = None
            return

        # Set up prev/current pointers
        previous = self.head
        current = self.head.next

        # Increment with next until we reach end of list, then remove last node
        while current.next:
            previous = current
            current = current.next

        # Eliminate previous next pointer
        previous.next = None

    # If last has data (not none), add new node to next. Otherwise, head.
    def insert_last(self, data):
        last = self.get_last()
        if last:
            last.next = Node(data)
        else:
            self.head = Node(data)

    # Track count, compare to index, return current node or None
    def get_at(self, index):
        count = 0
        current = self.head

        while current:
            if count == index:
                return current
            count += 1
            current = current.next

        return None

    # Lots of edge cases here to remember!
    def remove_at(self, index):
        # Empty list
        if self.head is None:
            return
        # 0 index, go to next
        if index == 0:
            self.head = self.head.next
            return
        # If those pass, get previous node
        previous = self.get_at(index - 1)
        # Handle out-of-bounds error
        if previous is None or previous.next is None:
            return
        # All tests pass, so now simply change prev pointer to exclude index
        previous.next = previous.next.next

    # Not overwriting data, merely repairing connections, and same edge cases
    def insert_at(self, data, index):
        # No head
        if self.head is None:
            return
        # Zero index
        if index == 0:
            self.head.next = self.head
            self.head = Node(data)
        # Grab previous to find right position
        # Don't forget get last method just in case we're at end
        previous = self.get_at(index - 1) or self.get_last()
        current = Node(data)
        current.next = previous.next
        previous.next = current
        # Out of bounds error handling
        if previous is None or previous.next is None:
            return


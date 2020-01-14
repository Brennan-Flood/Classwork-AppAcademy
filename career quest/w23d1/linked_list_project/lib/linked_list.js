// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;      
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let tail = new Node(val);
        if (this.length === 0 ) {
            this.head = tail;
        } else if ( this.length === 1 ) {
            this.head.next = tail;
        }
        this.tail = tail;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let tail = current;

        while (current.next) {
            tail = current;
            current = current.next;
        }
        this.tail = tail;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; 
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let head = new Node(val);
        if (!this.head) {
            this.head = head;
            this.tail = head;
        } else {
            head.next = this.head;
            this.head = head;
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -= 1;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while (node) {
            if (node.value === target) {
            return true;
            }
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter += 1;
        }
        return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            this.addToHead(val);
            return true;
        }
        if (index === this.length) {
            this.addToTail(val);
            return false;
        }
        let previous = this.get(index - 1);
        let node = new Node(val);
        let temp = previous.next;
        previous.next = node;
        node.next = temp;
        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.removeHead();
        }
        if (index === this.length - 1) {
            return this.removeTail();
        }
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length -= 1;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

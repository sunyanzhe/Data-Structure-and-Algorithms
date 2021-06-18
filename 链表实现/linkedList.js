class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    find(item) {
        let current = this.head;
        while (item !== current.element) {
            current = current.next;
        }
        return current;
    }
    findPrevious(item) {
        let current = this.head;
        while (current !== null && current.next.element !== item) {
            current = current.next;
        }
        return current;
    }
    remove(item) {
        let prevNode = this.findPrevious(item);
        if (prevNode !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
    insertAfter(newElement, item) {
        let newNode = new Node(newElement),
            current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    display() {
        let current = this.head.next;
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }
}
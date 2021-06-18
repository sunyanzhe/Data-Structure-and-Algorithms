class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}
class DLinkedList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
    }
    find(item) {
        let cur = this.head;
        while (cur !== null && cur.element !== item ) {
            cur = cur.next;
        }
        return cur;
    }
    findLast() {
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        return cur;
    }
    insertAfter(newElem, item) {
        let newNode = new Node(newElem),
            cur = this.find(item);
        if (cur !== null) {
            newNode.next = cur.next;
            newNode.prev = cur;
            cur.next = newNode;
        }
    }
    remove(item) {
        let cur = this.find(item);
        if (cur === null) return;
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        cur.next = null;
        cur.prev = null;
    }
    display() {
        let current = this.head.next;
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }
    displayReverse() {
        let cur = this.findLast();
        while (cur.prev !== null) {
            console.log(cur.element);
            cur = cur.prev;
        }
    }
}
function Node(val) {
    this.val = val;;
    this.next = null;
}

const copyRandomList = head => {
    let cHead = new Node(),
        cCur = cHead,
        cur = head,
        map = new Map();
    if (!cur) return cur
    while (cur) {
        cCur.val = cur.val
        cCur.next = cur.next ? new Node() : null
        map.set(cur, cCur)
        cur = cur.next
        cCur = cCur.next
    }
    cur = head
    cCur = head
    while (cur) {
        cCur.random = map.get(cur.random);
        cCur = cCur.next
        cur = cur.next
    }
    return cHead
}
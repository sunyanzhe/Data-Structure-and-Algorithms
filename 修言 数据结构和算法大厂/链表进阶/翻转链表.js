const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

/**
 * 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

    示例:
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
 */

function reverse(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
}

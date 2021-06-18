/**
 * 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明: 1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
 */

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

function ListNode(value) {
    this.value = value
    this.next = null
}

function reverse(head, m, n) {
    let dummy = new ListNode
    dummy.next = head
    let LeftHead, p, start, pre, cur
    p = dummy
    for (let i = 0; i < m - 1; i++) {
        p = p.next
    }
    LeftHead = p;
    pre = p.next
    start = pre
    cur = pre.next
    for (let i = m; i < n; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    LeftHead.next = pre
    start.next = cur
    return dummy.next
}
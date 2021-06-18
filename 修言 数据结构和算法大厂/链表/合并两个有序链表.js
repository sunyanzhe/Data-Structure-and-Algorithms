/**
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有结点组成的。
 */
/**
 * 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */

/**
 * 思路分析
 * 处理链表的本质, 是处理链表节点之间的指针关系
 */

function ListNode(val) {
    this.value = val
    this.next = null
}

function mergeTwoLists(l1, l2) {
    let head = new ListNode();
    let cur = head;
    while (l1 & l2) {
        if (l1.value < l2.value) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 === null ? l2 : l1
    return head.next
}
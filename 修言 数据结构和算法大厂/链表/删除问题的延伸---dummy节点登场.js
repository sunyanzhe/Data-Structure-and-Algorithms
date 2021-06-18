/**
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，
 * 只保留原始链表中 没有重复出现的数字。
 */

/**
 *  示例 1:
    输入: 1->2->3->3->4->4->5
    输出: 1->2->5
    示例 2:
    输入: 1->1->1->2->3
    输出: 2->3
 */

function ListNode(val) {
    this.value = val
    this.next = null
}
const deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    }
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy

    while (cur.next && cur.next.next) {
        if (cur.next.value === cur.next.next.value) {
            let value = cur.next.value
            while (cur.next && cur.next.value === value) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}
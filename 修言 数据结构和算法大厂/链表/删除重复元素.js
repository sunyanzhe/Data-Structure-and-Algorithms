/**
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 */
/**
 *  示例 1:
    输入: 1->1->2
    输出: 1->2
    示例 2:
    输入: 1->1->2->3->3
    输出: 1->2->3
 */

/**
 * 思路分析
 * 处理链表的本质, 是处理链表节点之间的指针关系
 */

function deleteDuplicates(head) {
    var cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.value === cur.next.value) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next
        }
    }
    return head
}
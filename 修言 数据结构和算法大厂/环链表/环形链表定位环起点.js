/**
 * 简单解法
 * 与判断有环思想一样, 当遇到第一个flag为ture的时候 那就是环的起点
 */

const detectCycle = (head) => {
    while (head) {
        if (head.flag) return head
        head.flag = true
        head = head.next
    }
    return head
}

/**
 * 快慢指针思路
 */

const detectCycle = (head) => {
    let fast = head.next.next, slow = head.next;
    while (fast !== slow && fast && slow) {
        fast = fast.next.next
        slow = slow.next
    }
    if (!fast || !slow) return null

    slow = head

    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
    
}
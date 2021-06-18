function hasCircle(head) {
    while (head) {
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
}
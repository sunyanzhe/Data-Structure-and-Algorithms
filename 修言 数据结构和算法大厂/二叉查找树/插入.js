function insert(root, val) {
    if (!root) return
    if (root.val < val) {
        if (root.right) {
            insert(root.right, val)
        } else {
            root.right = new Node(val)
        }
    }
    if (root.val > val) {
        if (root.left) {
            insert(root.left, val)
        } else {
            root.left = new Node(val)
        }
    }
}
function del(root, val) {
    if (!root) return
    if (root.val === val) {
        if (!root.left && !root.right) return null
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        root.val = getMin(root.right).val
        root.right = del(root.right, root.val);
        return root;
    } else if (root.val < val) {
        root.right = del(root.right, val);
        return root;
    } else {
        root.left = del(root.left, val)
        return root;
    }
}
function getMin(root) {
    while(root.left) {
        root = root.left;
    }
    return root;
}
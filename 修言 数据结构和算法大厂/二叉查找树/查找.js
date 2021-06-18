function search(root, n) {
    if (!root) return;
    if (root.val === n) {
        console.log(root)
    } else if(root.val > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
}
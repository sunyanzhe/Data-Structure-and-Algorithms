function preorder(root) {
    const stack = [root];
    const result = []
    while (stack.length) {
        let cur = stack.pop()
        result.push(cur.val)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return result
}

function postorder(root) {
    const stack = [root]
    const result = []
    while(stack.length) {
        let cur = stack.pop();
        result.unshift(cur.val)
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return result
}

function inorder(root) {
    const stack = [];
    const result = [];
    const cur = root
    while (cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }
    return result
}

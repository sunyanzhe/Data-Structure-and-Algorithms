/**
 * 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 
 * （即逐层地，从左到右访问所有节点）。
 */
function levelOrder(root) {
    const result = []
    const queue = [root]
    while (queue) {
        let level = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const top = queue.shift()
            level.push(top.val)
            if (top.left) queue.push(top.left)
            if (top.right) queue.push(top.right)
        }
        result.push(level)
    }
    return result
}

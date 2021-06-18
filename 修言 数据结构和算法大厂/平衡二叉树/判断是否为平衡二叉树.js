function isBalanced(root) {
    let flag = true
    function dfs(root) {
        if (!root || !flag) {
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)

        if (Math.abs(left - right) > 1) {
            flag = false
            return 0
        }
        return Math.max(left, right) + 1
    }
    dfs(root)
    return flag
}
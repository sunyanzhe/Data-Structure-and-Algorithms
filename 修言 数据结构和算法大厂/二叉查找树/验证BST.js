/**
 *  题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
    假设一个二叉搜索树具有如下特征：
    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
 */

function validBST(root) {
    function dfs(root, min, max) {
        if (!root) return true
        if (root.val <= min || root.val >= max) return false
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
    }
    return dfs(root, -Infinity, +Infinity)
}
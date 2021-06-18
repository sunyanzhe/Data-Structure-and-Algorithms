/**
 * 输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
 */

/**
 * 解法: 将二叉树先转成有序数组, 然后再转换成平衡树
 */
function balanceBST(root) {
    const nums = []
    function inorder(root) {
        if (!root) return null
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }
    function buildAVL(low, high) {
        if (low > high) return null
        let mid = (low + high) >> 1
        let cur = new TreeNode(nums[mid])
        cur.left = buildAVL(low, mid - 1)
        cur.right = buildAVL(mid + 1, high)
        return cur
    }
    inorder(root)
    return buildAVL(0, nums.length - 1)
}
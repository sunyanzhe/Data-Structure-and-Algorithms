/**
 * 
 * 题目描述：根据一棵树的前序遍历与中序遍历构造二叉树。

注意: 你可以假设树中没有重复的元素。
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null
}

const buildTree = function(preorder, inorder) {
    const len = preorder.length;
    function dfs(preL, preR, inL, inR) {
        if (preL > preR) return null
        const val = preorder[preL];
        const key = inorder.indexOf(val);
        const leftNumber = key - inL;
        const root = new TreeNode(val);
        root.left = dfs(preL+1, preL+leftNumber, inL, key-1);
        root.right = dfs(preL+leftNumber+1, preR, key+1, inR);
        return root;
    }
    return dfs(0, len-1, 0, len-1);
}

const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
  };

// 前序遍历
function preorde(root) {
    if (!root) return
    console.log('当前遍历的节点值是: ', root.value)
    preorde(root.left)
    preorde(root.right)
}

// 中序遍历
function inorder(root) {
    if (!root) return
    inorder(root.left)
    console.log('当前遍历的节点值是: ', root.value)
    inorder(root.right)
}

// 后序遍历
function postorder(root) {
    // 递归边界，root 为空
    if(!root) {
        return 
    }
     
    // 递归遍历左子树 
    postorder(root.left)  
    // 递归遍历右子树  
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)  
}
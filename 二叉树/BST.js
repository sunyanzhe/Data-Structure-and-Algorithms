class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.count = 1;
        this.data = data;
    }
    show() {
        return this.data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
        } else {
            let cur = this.root,
                parent = null;
            while (true) {
                parent = cur;
                if (data < cur.data) {
                    cur = cur.left;
                    if (cur === null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    cur = cur.right;
                    if (cur === null) {
                        parent.right = node;
                        break;
                    }                    
                }
            }
        }
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    preOrder(node) {
        if (node !== null) {
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }
    getMin(node = this.root) {
        while (node !== null) {
            node = node.left;
        }
        return node;
    }
    getMax(node = this.root) {
        while (node !== null) {
            node = node.right;
        }
        return node;
    }
    find(data) {
        let node = this.root;
        while (node !== null) {
            if (data === node.data) {
                return node;
            } else if (data < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return null; 
    }
    /**
     * 
     *1.判断当前节点是否包含待删除的数据
     *2.如果不包含则判断当前节点值,如果当前值大于待删除数据,则对比右侧数,如果小则对比左侧树
     *3.如果包含当前数据,判断当前节点是否含有子节点
     *4.如果没有则直接删除
     *5.如果只有一个那么让子节点代替当前节点
     *6.如果有两个节点那么找到当前节点的右树的最小值,或者左树的最大值代替当前节点的值
     */
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, data) {
        if (node === null) return null;
        if (data === node.data) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            let minNode = this.getMin(node.right);
            node.data = minNode.data;
            node.right = this.removeNode(node.right, minNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, data) {
        if (node === null) return null;
        if (data === node.data) {
            if (data.right === null && data.left === null) return 
        }
    }
    update(data) {
        let grade = this.find(data);
        grade.count++;
        return grade;
    }
}
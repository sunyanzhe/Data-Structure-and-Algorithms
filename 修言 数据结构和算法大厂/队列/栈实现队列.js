/**
 * 
 *  题目描述：使用栈实现队列的下列操作：
    push(x) -- 将一个元素放入队列的尾部。
    pop() -- 从队列首部移除元素。
    peek() -- 返回队列首部的元素。
    empty() -- 返回队列是否为空。
 */

function Queue() {
    this.stack1 = []
    this.stack2 = []
}

Queue.prototype = {
    constructor: Queue,
    push(x) {
        this.stack1.push(x)
    },
    pop() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.length && this.stack2.pop()
    },
    peek() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.length && this.stack2[this.stack2.length - 1]
    },
    empty() {
        return !this.stack2.length && !this.stack1.length
    }
}
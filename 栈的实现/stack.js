class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    push(element) {
        this.dataStore[this.top++] = element;
    }
    pop() {
        return this.dataStore[--this.top];
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    length() {
        return this.top;
    }
    clear() {
        this.top = 0;
    }
    toString() {
        return this.dataStore.toString();
    }
}

function mulBase(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0, len = word.length; i < len; i++) {
        s.push(word[i]);
    }
    let rword = '';
    while(s.length() > 0) {
        rword += s.pop();
    }
    return rword === word;
}

//中缀表达式转换为后缀表达式
function foo(str) {
    let op1 = new Stack(),
        op2 = new Stack(),
        reg = /\d+/;
    for (let i = 0, len = str.length; i < len; i++) {
        let char = str.charAt(i);
        if (reg.test(char)) {
            op1.push(char);
        } else {
            if (char == ')') {
                while (op2.peek() != '(') {
                    op1.push(op2.pop())
                }
                op2.pop();
            } else {
                op2.push(char);
            }
        }
    }
    while(op2.length()) {
        op1.push(op2.pop());
    }
    return op1.toString();
}
/**
 * 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，
 * 判断字符串是否有效。
 */

 /**
  * 示例 1:
    输入: "()"
    输出: true

    示例 3:
    输入: "(]"
    输出: false
  */

const isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    if (!s.length) return true
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        if (Reflect.has(map, cur)) {
            stack.push(map[cur])
        } else {
            let res = stack.pop()
            if (res !== cur || !stack.length) return false
        }
    }
    return !stack.length
}
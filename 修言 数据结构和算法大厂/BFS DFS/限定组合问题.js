/**
 * 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */
const combine = (n, m) => {
    const nums = []
    const result = []
    for (let i = 0; i < n; i++) {
        nums.push(i + 1)
    }
    function dfs(cur = [], rest) {
        if (cur.length + rest.length < m) return
        if (cur.length === m) {
            result.push(cur)
            return
        }
        for (let i = 0; i < rest.length; i++) {
            let c = cur.slice();
            c.push(rest[i]);
            let res = rest.sclie(i + 1);
            dfs(c, res)
        }
    }
    dfs([], nums)
    return result
}

function combine2(n, m) {
    const result = [],
        curr = []
    function dfs(index) {
        if (curr.length === m) {
            result.push(curr.slice())
            return
        }
        for (let i = index; i <= n; i++) {
            curr.push(i)
            dfs(i + 1)
            curr.pop()
        }
    }
    dfs(1)
    return result
}
/**
 * 
 */

function permute(nums) {
    const result = []
    function dfs(cur = [], rest) {
        if (!rest.length) {
            result.push(cur)
        }
        for (let i = 0; i < rest.length; i++) {
            let item = rest[i];
            cur.push(item)
            dfs(cur, rest.filter((_, index) => i !== index))
        }
    }
    dfs([], nums)
    return result
}

function permute2(nums) {
    const result = [],
        len = nums.len,
        cur = [],
        visited = {};
    function dfs(nth) {
        if (nth === len) {
            result.push(cur.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (!visited[cur[i]]) {
                cur.push(cur[i])
                visited[cur[i]] = true
                dfs(nth + 1)
                cur.pop()
                visited[cur[i]] = false
            }
        }
    }
    dfs(0)
    return result
}
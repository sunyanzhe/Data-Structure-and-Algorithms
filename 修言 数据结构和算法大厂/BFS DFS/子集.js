/**
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
   说明：解集不能包含重复的子集。
 */

function subsets(nums) {
    const result = []
    function dfs(cur = [], rest) {
        result.push(cur)
        for (let i = 0; i < rest.length; i++) {
            let c = cur.slice()
            let res = rest.slice(i + 1)
            c.push(rest[i])
            dfs(c, res)
        }
    }
    dfs([], nums)
    return result
}

function subsets2(nums) {
    const result = [],
        curr = [];
    function dfs(index) {
        result.push(curr.slice())
        for (let i = index; i < nums.length; i++) {
            curr.push(nums[i])
            dfs(i + 1)
            curr.pop()
        }
    }
    dfs(0)
    return result
}
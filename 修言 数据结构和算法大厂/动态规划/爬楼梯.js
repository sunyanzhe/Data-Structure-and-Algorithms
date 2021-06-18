/**
 * 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

// 递归记忆法
const f = [];
function climbstairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (!f[n]) f[n] = climbstairs(n - 1) + climbstairs(n - 2);
    return f[n]
}


// 动态规划
function climbstairs(n) {
    const f = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        f[n] = f[n -1] + f[n - 2]
    }
    return f[n]
}
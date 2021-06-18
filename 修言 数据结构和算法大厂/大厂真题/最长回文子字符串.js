// 题目描述：给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

/**
 示例 1：
    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
 */

/**
 * 分析:
 * 但凡遇到最值 大部分都可以用到动态规划
 * 
 * 我们设 dp 为一个长度等于s.length的二维数组
 * 设dp的两个index为 left、right作为子字符串的两个端点，且初始值都为0
 * 如果以left和right为端点的子字符串为回文字符串的话
 * 那么 dp[left][right] = 1 ; 否则dp[left][right] = 0
 * 
 * 如何判断是回文字符串
 * 1. left 和 right 两端的字符相等
 * 2. left 和 right 之间的字符串是回文字符串
 * 那么从left 到 right就会回文字符串
 * 换成表达式就是 s[left] === s[right] && dp[left + 1][right - 1] === 1
 * 
 * dp中是有一些初始值的 
 * 1. 当left === right时 也就是子字符串是一个字符 那么它必然是回文  ---- 例子: 'a'
 * 2. 当 left === right - 1 时 当子字符串是两个字符时, 如果两个字符是一样的 那么他也是回文 ---- 例子: 'aa'
 * 就是奇偶的关系
 */

const longestPalindrome = (s) => {
    const len = s.length,
        dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
    }

    let start = 0, end = 0;
    
    // 先把初始值填到二维数组里
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1;
    }
    // 'aa'偶数回文情况
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            end = i + 1;
        }
    }
    // n为子字符串长度加一, 因为index从0开始
    for (let n = 2; n < len; n++) {
        for (let left = 0; left < len; left++) {
            let right = left + n;
            if (dp[left + 1][right - 1] && s[left] === s[right]) {
                dp[left][right] = 1
                start = left;
                end = right;
            } 
        }
    }
    return s.substring(start, end + 1);
}
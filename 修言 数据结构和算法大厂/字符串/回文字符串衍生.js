/**
 * 真题描述：给定一个非空字符串 s，
 * 最多删除一个字符。
 * 判断是否能成为回文字符串。
 */

function isPalindrome(str) {
    const len = str.length
    let j = 0, k = len - 1;
    while (j < k && s[j] === s[k]) {
        j++;
        k--;
    }
    function isReverse(str, m, n) {
        while (m < n) {
            if (str[m] !== srt[n]) return false
            n--
            m++;
        }
        return true
    }
    return isReverse(str, j + 1, k) || isReverse(str, j , k - 1)
}
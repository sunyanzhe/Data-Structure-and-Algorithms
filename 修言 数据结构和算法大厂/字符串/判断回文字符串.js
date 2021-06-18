/**
 * 例子: 'ysesy'
 */

function isReverse(str) {
    var reverse = str.split('').reverse().join('')
    return reverse === str
}

function isReverse2(str) {
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str.charAt(i) !== str.charAt(len - 1 - i))
            return false
    }
    return true
}
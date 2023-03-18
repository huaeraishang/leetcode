/*
 * @lc app=leetcode.cn id=1616 lang=javascript
 *
 * [1616] 分割两个字符串得到回文串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
    return check(a, b) || check(b, a)
};

const check = (a, b) => {
    const aLen = a.length
    let left = 0
    let right = aLen - 1
    while (left <= right && a[left] === b[right]) {
        left++
        right--
    }
    if (left > right) {
        return true
    }
    return checkSub(a, left, right) || checkSub(b, left, right)
}

const checkSub = (str, left, right) => {
    while (left <= right && str[left] === str[right]) {
        left++
        right--
    }
    return left > right
}
// @lc code=end


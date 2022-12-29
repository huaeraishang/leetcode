/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) {
        return true
    }
    let arr = s.split('')
    let start = true
    while (arr.join('') !== s || start) {
        const first = arr.shift()
        arr.push(first)
        start = false
        if (arr.join('') === goal) {
            return true
        }
    }
    return false
};
// @lc code=end


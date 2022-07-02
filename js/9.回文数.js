/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    const mid = Math.floor(str.length / 2)
    let i = 0
    let j = 0
    let flag = true
    if (str.length % 2 === 0) {
        i = mid - 1
        j = mid
    } else {
        i = mid - 1
        j = mid + 1
    }
    while(i >= 0 && j < str.length) {
        if (str[i] !== str[j]) {
            flag = false
            break
        } else {
            i --
            j ++
        }
    }
    return flag
};
// @lc code=end


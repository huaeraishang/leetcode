/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function judge(s, low, high) {
        for (let i = low, j = high; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false
            } 
        }
        return true
    }
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return judge(s, i + 1, j) || judge(s, i, j - 1)
        }
    }
    return true
};
// @lc code=end


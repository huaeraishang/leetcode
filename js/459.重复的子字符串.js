/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(0, i + 1)
        if (s.split(str).join('') === '' && i < s.length - 1) {
            return true
        }
    }
    return false
};
// @lc code=end


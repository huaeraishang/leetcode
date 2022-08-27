/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === ')') {
            if (arr.pop() !== '(') {
                return false
            }
        } else if (char === ']') {
            if (arr.pop() !== '[') {
                return false
            }
        } else if (char === '}') {
            if (arr.pop() !== '{') {
                return false
            }
        } else {
            arr.push(char)
        }
    }
    return arr.length === 0
};
// @lc code=end


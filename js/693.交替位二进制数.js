/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const str = n.toString(2)
    let pre = ''
    for (let i = 0; i < str.length; i++) {
        const cr = str[i]
        if (i > 0) {
            if (pre === cr) {
                return false
            }
        }
        pre = cr
    }
    return true
};
// @lc code=end


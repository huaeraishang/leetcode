/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    const ans = []
    for (let i = 0; i < s.length; i++) {
        let cr = s[i]
        const crCode = cr.charCodeAt()
        if (crCode >= 65 && crCode <= 90) {
            cr = String.fromCharCode(crCode + 32)
        }
        ans.push(cr)
    }
    return ans.join('')
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let str = s.replace(/-/g, '')
    let ans = []
    while(str.length > k) {
        const len = str.length
        ans.unshift(str.slice(len - k, len))
        str = str.slice(0, len - k)
    }
    ans.unshift(str)
    return ans.join('-').toUpperCase()
};
// @lc code=end


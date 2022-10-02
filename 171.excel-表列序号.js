/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length
    let ans = 0
    let k = 0
    let n = 0
    for (let i = length - 1; i >=0; i--) {
        k = columnTitle.charCodeAt(i) - 'A'.charCodeAt() + 1
        n = 26 ** (length - i - 1)
        ans += (k * n)
    }
    return ans
};
// @lc code=end


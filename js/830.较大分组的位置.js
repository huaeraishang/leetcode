/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let pre = ''
    const ans = []
    let start = 0
    const len = s.length
    for (let i = 0; i < len; i++) {
        const cr = s[i]
        if (pre !== cr) {
            if (pre !== '') {
                const rangeLen = i - 1 - start
                if (rangeLen >= 2) {
                    ans.push([start, i - 1])   
                }
            }
            pre = cr
            start = i
        }
    }
    if (start !== len - 1) {
        const rangeLen = len - 1 - start
        if (rangeLen >= 2) {
            ans.push([start, len - 1])   
        }
    }
    return ans
};
// @lc code=end


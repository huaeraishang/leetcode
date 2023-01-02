/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const len = s.length
    let idxLeft = -len
    const ans = []
    for (let i = 0; i < len; i++) {
        if (s[i] === c) {
            idxLeft = i
        }
        ans[i] = i - idxLeft
    }
    let idxRight = 2 * len
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === c) {
            idxRight = i
        }
        ans[i] = Math.min(ans[i], idxRight - i)
    }
    return ans
};
// @lc code=end


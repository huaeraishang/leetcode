/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const m = g.length
    const n = s.length
    g.sort((a, b) => { return a - b })
    s.sort((a, b) => { return a - b })
    let count = 0
    for (let i = 0, j = 0; i < m && j < n; i++, j++) {
        while (j < n && s[j] < g[i]) {
            j++
        }
        if (j < n) {
            count++
        }
    }
    return count
};
// @lc code=end


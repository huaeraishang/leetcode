/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const counts = []
    let i = 0
    while (i < s.length) {
        let count = 0
        let startCr = s[i]
        while (i < s.length && s[i] === startCr) {
            count ++
            i++
        }
        counts.push(count)
    }
    let ans = 0
    for (let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i], counts[i - 1])
    }
    return ans
};
// @lc code=end


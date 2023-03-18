/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if (s.length < 2) {
        return s.length
    }
    const charCounts = new Array(26).fill(0)
    let left = 0
    let right = 0
    let maxCount = 0
    let ans = 0
    while (right < s.length) {
        const rightIndex = s[right].charCodeAt() - 'A'.charCodeAt()
        charCounts[rightIndex] ++
        maxCount = Math.max(maxCount, charCounts[rightIndex])
        right ++
        if (right - left > maxCount + k) {
            const leftIndex = s[left].charCodeAt() - 'A'.charCodeAt()
            charCounts[leftIndex] --
            left ++
        }
        ans = Math.max(ans, right - left)
    }
    return ans
};
// @lc code=end


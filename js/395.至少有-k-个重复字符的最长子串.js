/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let ans = 0
    for (let i = 1; i <= 26; i++) {
        let charStatus = new Array(26).fill(0)
        // 满足要求的字符种类
        let charCategroyCount = 0
        // 达到个数的字符数
        let charSum = 0
        let left = 0
        let right = 0
        while (right < s.length) {
            const rCh = s[right]
            const index = rCh.charCodeAt() - 'a'.charCodeAt()
            charStatus[index]++
            if (charStatus[index] === 1) {
                charCategroyCount++
            }
            if (charStatus[index] === k) {
                charSum++
            }
            right++
            while (charCategroyCount > i) {
                const lCh = s[left]
                const index = lCh.charCodeAt() - 'a'.charCodeAt()
                charStatus[index]--
                if (charStatus[index] === 0) {
                    charCategroyCount--
                }
                if (charStatus[index] === k - 1) {
                    charSum--
                }
                left++
            }
            if (charCategroyCount === charSum) {
                ans = Math.max(ans, right - left)
            }
        }
    }
    return ans
};
// @lc code=end


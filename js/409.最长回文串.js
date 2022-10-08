/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (map.has(char)) {
            let count = map.get(char)
            count ++
            map.set(char, count)
        } else {
            map.set(char, 1)
        }
    }
    map.forEach(value => {
        ans += Math.floor(value / 2) * 2
        if (value % 2 === 1 && ans % 2 === 0) {
            ans ++
        }
    })
    return ans
};
// @lc code=end


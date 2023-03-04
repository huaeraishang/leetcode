/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = ''
    for (let i = 0; i < s.length; i++) {
        const strs = [s[i]]
        let j = i + 1
        while (j < s.length) {
            if (strs.includes(s[j])) {
                if (strs.length > ans.length) {
                    ans = strs.join('')
                }
                break
            } else {
                strs.push(s[j])
                j++
            }
        }
        if (strs.length > ans.length) {
            ans = strs.join('')
        }
    }
    return ans.length
};
// @lc code=end


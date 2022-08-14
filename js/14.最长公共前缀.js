/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return ''
    }
    let target = strs[0]
    for (let i = 0; i < target.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const str = strs[j]
            if (i === str.length || target[i] !== str[i]) {
                return target.slice(0, i)
            }
        }
    }
    return target
};
// @lc code=end


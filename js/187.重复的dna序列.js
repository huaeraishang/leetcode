/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const set = new Set()
    const ans = new Set()
    for (let i = 0; i < s.length; i++) {
        const str = s.slice(i, i + 10)
        if (set.has(str)) {
            ans.add(str)
        } else {
            set.add(str)
        }
    }
    return [...ans]
};
// @lc code=end


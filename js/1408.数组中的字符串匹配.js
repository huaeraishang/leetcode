/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let set = new Set()
    words.forEach(item1 => {
        words.forEach(item2 => {
            if (item2 !== item1 && item2.includes(item1)) {
                set.add(item1)
            }
        })
    })
    return [...set]
};
// @lc code=end


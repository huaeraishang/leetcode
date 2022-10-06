/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const uniqCharMap = new Map() 
    const length = s.length
    for (let i = 0; i < length; i++) {
        const char = s[i]
        if (uniqCharMap.has(char)) {
            uniqCharMap.set(char, -1)
        } else {
            uniqCharMap.set(char, i)
        }
    }
    let first = length
    uniqCharMap.forEach((value) => {
        if (value > -1 && value < first) {
            first = value
        }
    })
    return first === length ? -1 : first
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=2243 lang=javascript
 *
 * [2243] 计算字符串的数字和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if (s.length <= k) {
        return s
    }
    let str = ''
    for (let i = 0; i < s.length; i+=k) {
        const sum = s.slice(i, i + k).split('')
        .map(item => parseInt(item))
        .reduce((a, b) => a + b)
        str += sum
    }
    return digitSum(str, k)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let add = 0
    let ans = []
    while (i >= 0 || j >= 0 || add !== 0) {
        let a = num1[i] ? parseInt(num1[i]) : 0
        let b = num2[j] ? parseInt(num2[j]) : 0
        let sum = a + b + add
        ans.unshift(sum % 10)
        add = Math.floor(sum / 10)
        i--
        j--
    }
    return ans.join('')
};
// @lc code=end


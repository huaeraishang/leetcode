/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num
};
// @lc code=end


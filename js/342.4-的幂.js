/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n / 4 > 0 && n % 4 === 0) {
        return isPowerOfFour(n / 4)
    }
    return n === 1
};
// @lc code=end


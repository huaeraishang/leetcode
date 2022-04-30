/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n / 3 > 0 && n % 3 === 0) {
        return isPowerOfThree(n / 3)
    }
    return n === 1
};
// @lc code=end


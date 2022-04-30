/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let fn = function(t) {
        if(t/2 > 0 && t%2 === 0) {
            return fn(t/2)
        }
        return t === 1
    }
    return fn(n)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) {
        return false
    }
    const nums = [2, 3, 5]
    nums.forEach(num => {
        while (n % num === 0) {
            n /= num
        }
    })
    return n === 1
};
// @lc code=end


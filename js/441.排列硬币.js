/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 0
    let sum = 0
    while (sum <= n) {
        i++
        sum += i
    }
    return i - 1
};
// @lc code=end


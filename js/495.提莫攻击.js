/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ans = 0
    // 未中毒的起始位置
    let expired = 0
    for (let i = 0; i < timeSeries.length; i++) {
        const time = timeSeries[i]
        if (time > expired) {
            ans += duration
        } else {
            ans += time + duration - expired
        }
        expired = time + duration
    }
    return ans

};
// @lc code=end


/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const diff = new Array(n).fill(0)
    bookings.forEach(booking => {
        diff[booking[0] - 1] += booking[2]
        if (booking[1] < n) {
            diff[booking[1]] -= booking[2]
        }
    })
    for (let i = 1; i < n; i++) {
        diff[i] += diff[i - 1]
    }
    return diff
};
// @lc code=end


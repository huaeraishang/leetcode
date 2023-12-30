/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  const weaks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date(year, month - 1, day)
  return weaks[date.getUTCDay()]
};
// @lc code=end


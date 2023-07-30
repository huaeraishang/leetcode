/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  const arr = [0]
  for (let i = 0; i < gain.length; i++) {
    arr[i + 1] = gain[i] + arr[i]
  }
  return Math.max(...arr)
};
// @lc code=end


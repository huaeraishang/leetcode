/*
 * @lc app=leetcode.cn id=2485 lang=javascript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  let sum2 = 0
  for (let i = 1; i <= n; i++) {
    sum2 += i
    if (sum2 === (sum + i) / 2) {
      return i
    }
  }
  return -1
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let ans = 0
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num -= 1
    }
    ans++
  }
  return ans
};
// @lc code=end


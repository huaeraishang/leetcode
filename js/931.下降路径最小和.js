/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const len = matrix.length
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  dp[0] = [...matrix[0]]
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 取正上方
      let sum = dp[i - 1][j]
      // 分成两次比较，处理左边界和右边界
      if (j > 0) {
        // 非左边界，与左上方比较
        sum = Math.min(sum, dp[i - 1][j - 1])
      }
      if (j < len - 1) {
        // 非右边界，再与右上方比较
        sum = Math.min(sum, dp[i - 1][j + 1])
      }
      dp[i][j] = matrix[i][j] + sum
    }
  }
  return Math.min(...dp[len - 1])
};
// @lc code=end


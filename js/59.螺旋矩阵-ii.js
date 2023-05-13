/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1
  let num = 0
  let page = 0
  const ans = new Array(n).fill(0).map(_ => new Array(n).fill(0))
  while (left <= right && top <= bottom && num <= n * n) {
    if (page === 0) {
      for (let i = left; i <= right; i++) {
        num++
        ans[top][i] = num
      }
      top++
    } else if (page === 1) {
      for (let i = top; i <= bottom; i++) {
        num++
        ans[i][right] = num
      }
      right--
    } else if (page === 2) {
      for (let i = right; i >= left; i--) {
        num++
        ans[bottom][i] = num
      }
      bottom--
    } else if (page === 3) {
      for (let i = bottom; i >= top; i--) {
        num++
        ans[i][left] = num
      }
      left++
    }
    page = (page + 1) % 4
  }
  return ans
};
// @lc code=end


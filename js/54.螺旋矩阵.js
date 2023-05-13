/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  let page = 0
  const ans = []
  while (left <= right && top <= bottom) {
    if (page === 0) {
      for (let i = left; i <= right; i++) {
        ans.push(matrix[top][i])
      }
      top++
    } else if (page === 1) {
      for (let i = top; i <= bottom; i++) {
        ans.push(matrix[i][right])
      }
      right--
    } else if (page === 2) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i])
      }
      bottom--
    } else if (page === 3) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left])
      }
      left++
    }
    page = (page + 1) % 4
  }
  return ans
};
// @lc code=end


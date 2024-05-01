/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const len = grid.length
  const map = new Map()
  let ans = 0
  grid.forEach(row => {
    const rowKey = row.toString()
    map.set(rowKey, map.get(rowKey) + 1 || 1)
  })
  for (let i = 0; i < len; i++) {
    const row = grid[i]
    const col = []
    for (let j = 0; j < row.length; j++) {
      const item = grid[j][i]
      col.push(item)
    }
    const colKey = col.toString()
    if (map.has(colKey)) {
      ans += map.get(colKey)
    }
  }
  return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const ans = []
  operations.forEach(operation => {
    if (operation === 'C') {
      ans.pop()
    } else if (operation === 'D') {
      ans.push(ans[ans.length - 1] * 2)
    } else if (operation === '+') {
      ans.push(ans[ans.length - 1] + ans[ans.length - 2])
    } else {
      ans.push(Number(operation))
    }
  })

  // 此处设置初始值为0，避免空数组reduce方法报错
  return ans.reduce((pre, cur) => {
    return pre + cur
  }, 0)
};
// @lc code=end


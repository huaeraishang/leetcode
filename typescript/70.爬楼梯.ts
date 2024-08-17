/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let pre1 = 1
  let pre2 = 2
  for (let i = 3; i <= n; i++) {
    let cur = pre1 + pre2
    pre1 = pre2
    pre2 = cur
  }
  return pre2
};
// @lc code=end


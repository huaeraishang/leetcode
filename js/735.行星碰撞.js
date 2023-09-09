/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const ans = []
  asteroids.forEach((asteroid) => {
    let canAdd = true
    // asteroid > 0 往右移，永远不会与左边元素相撞，直接加入
    // ans[ans.length - 1] < 0, 永远不会与左边元素相撞，直接加入
    // pre >= cur, canAdd = false时，不用再进入循环
    while (canAdd && ans.length > 0 && ans[ans.length - 1] > 0 && asteroid < 0) {
      const pre = ans[ans.length - 1]
      const cur = - asteroid
      if (pre <= cur) {
        ans.pop()
      } 
      if (pre >= cur) {
        canAdd = false
      }
    }
    // asteroid > 0 往右移，永远不会与左边元素相撞，直接加入
    if (canAdd) {
      ans.push(asteroid)
    }
  })
  return ans
};
// @lc code=end


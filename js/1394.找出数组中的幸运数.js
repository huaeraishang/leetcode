/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const map = new Map()
  let res = -1
  arr.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  map.forEach((value, key) => {
    if (value === key) {
      res = Math.max(res, key)
    }
  })
  return res
};
// @lc code=end


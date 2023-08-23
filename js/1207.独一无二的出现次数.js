/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = new Map()
  let counts = []
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
  }
  for (let value of map.values()) {
    if (counts.includes(value)) {
      return false
    }
    counts.push(value)
  }
  return true
};
// @lc code=end


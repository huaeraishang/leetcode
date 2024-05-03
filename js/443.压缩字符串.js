/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let fast = 0
  let slow = 0
  let rangeLeft = 0
  const len = chars.length
  while (fast < len) {
    if (chars[fast] !== chars[fast + 1] || fast === len - 1) {
      let count = fast - rangeLeft + 1
      chars[slow++] = chars[fast]
      if (count > 1) {
        const nums = []
        while(count > 0) {
          nums.unshift(count % 10)
          count = Math.floor(count / 10)
        }
        nums.forEach(num => {
          chars[slow++] = num.toString()
        })
      }
      rangeLeft = fast + 1
    }
    fast ++
  }
  return slow
};
// @lc code=end


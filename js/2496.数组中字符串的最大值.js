/*
 * @lc app=leetcode.cn id=2496 lang=javascript
 *
 * [2496] 数组中字符串的最大值
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let ans = 0
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    if (/[A-Za-z]+/.test(str)) {
      console.log(str)
      ans = Math.max(ans, str.length)
    } else {
      ans = Math.max(ans, Number(str))
    }
  }
  return ans
};
// @lc code=end


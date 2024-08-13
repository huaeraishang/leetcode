/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let left = 0
  let right = 0
  let ans = 1
  while (right < s.length) {
    if (s[left] !== s[right]) {
      ans = Math.max(ans, right - left)
      left = right
    }
    right++
  }
  // 处理最后一个字符和前面相等的情况, 需要另外计算一次， 如"cc"
  ans = Math.max(ans, right - left)
  return ans
};
// @lc code=end


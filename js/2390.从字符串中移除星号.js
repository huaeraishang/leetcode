/*
 * @lc app=leetcode.cn id=2390 lang=javascript
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
};
// @lc code=end


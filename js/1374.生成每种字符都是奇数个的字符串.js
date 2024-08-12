/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
  let ans = ''
  if (n % 2 === 0) {
    ans = new Array(n - 1).fill('a').join('') + 'b'
  } else {
    ans = new Array(n).fill('a').join('')
  }
  return ans
};
// @lc code=end


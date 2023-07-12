/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const minLen = Math.min(str1.length, str2.length)
  for (let i = minLen; i > 0; i--) {
    if (str1.length % i === 0 && str2.length % i === 0) {
      const sub = str1.slice(0, i)
      if (check(str1, i, sub) && check(str2, i, sub)) {
        return sub
      }
    }
  }
  return ''
};

var check = function(str, len, sub) {
  const num = str.length / len
  let res = ''
  for (let i = 0; i < num; i++) {
    res += sub
  }
  return str === res 
}
// @lc code=end


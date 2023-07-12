/*
 * @lc app=leetcode.cn id=2544 lang=javascript
 *
 * [2544] 交替数字和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  const arr = n.toString().split('').map((item) => parseInt(item))
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      ans += arr[i]
    } else {
      ans -= arr[i]
    }
  }
  return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let left = 0
  let right = 0
  let count = 0
  let ans = 0
  while (right < s.length) {
    const chR = s[right]
    right ++
    if (isVowel(chR)) {
      count ++
    }
    while (right - left >= k) {
      const chL = s[left]
      ans = Math.max(ans, count)
      left ++
      if (isVowel(chL)) {
        count --
      }
    }
  }
  return ans
};
var isVowel = function(letter) {
  return /[aeiou]/.test(letter)
}
// @lc code=end


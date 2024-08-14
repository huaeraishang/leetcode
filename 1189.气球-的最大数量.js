/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const map = new Map()
  const ballonArr = 'balloon'.split('')
  let ans = 0
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (ballonArr.includes(char)) {
      map.set(char, 1 + (map.get(char) || 0))
    }
  }
  let min = Number.MAX_SAFE_INTEGER
  let doubleMin = Number.MAX_SAFE_INTEGER
  let count = 0
  map.forEach((value, key) => {
    if (key === 'l' || key === 'o') {
      doubleMin = Math.min(doubleMin, value)
      count++
    }
    count++
    min = Math.min(min, value)
  })
  if (count < ballonArr.length) {
    return 0
  }
  if (doubleMin < min * 2) {
    ans = Math.floor(doubleMin / 2)
  } else {
    ans = min
  }
  return ans
};
// @lc code=end


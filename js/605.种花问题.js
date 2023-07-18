/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (flowerbed[i] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1
        count ++
      }
    } else if (i > 0 && i < flowerbed.length - 1) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1
        count ++
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1) {
        flowerbed[i] = 1
        count ++
      }
    }
  }
  return count >= n
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const len = letters.length
   if (target >= letters[len - 1]) {
      return letters[0]
   }
   let low = 0
   let high = len - 1
   while (low < high) {
      let mid = low + ((high - low) >> 1)
      if (letters[mid] > target) {
          high = mid
      } else {
          low = mid + 1
      }
   }
   return letters[low]

};
// @lc code=end


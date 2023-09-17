/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  // 统计词频
  const arr1 = new Array(26).fill(0)
  const arr2 = new Array(26).fill(0)
  for (c of word1) {   
    arr1[c.charCodeAt() - 'a'.charCodeAt()] ++
  }
  for (c of word2) {   
    arr2[c.charCodeAt() - 'a'.charCodeAt()] ++
  }
  for (let i = 0; i < 26; i++) {
    // 两者都等于0
    if (arr1[i] + arr2[i] === 0) {
      continue
    }
    // 一个等于0，一个不等于0，也就是一个包含，另一个不包含
    if (arr1[i] === 0 || arr2[i] === 0) {
      return false
    }
  }
  // 按词频大小从低到高排序
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};
// @lc code=end


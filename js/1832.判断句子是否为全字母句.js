/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  const arr = []
  for (let i = 97; i <= 122; i++) {
    arr.push(String.fromCharCode(i))
  }
  for (let i = 0; i < sentence.length; i++) {
    if (arr.includes(sentence[i])) {
      arr.splice(arr.indexOf(sentence[i]), 1)
    }
  }
  return arr.length === 0
};
// @lc code=end


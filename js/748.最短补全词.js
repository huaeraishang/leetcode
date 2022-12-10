/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const filterLicensePlate = licensePlate.replace(/\d|\s/g, '').toLowerCase()
    let ans = ''
    words.forEach(word => {
       let wordBak = word
       let flag = true
       for (let i = 0; i < filterLicensePlate.length; i++) {
          const cr = filterLicensePlate[i]
          if (!wordBak.includes(cr)) {
              flag = false
              break
          } else {
              wordBak = wordBak.replace(cr, '')
          }
       }
       if ((ans === '' || word.length < ans.length) && flag) {
          ans = word
       }
    })
    return ans
};
// @lc code=end


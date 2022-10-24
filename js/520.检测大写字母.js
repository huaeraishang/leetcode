/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const isAllUpperCase = word.search(/[a-z]/g) === -1
    const isAllLowerCase = word.search(/[A-Z]/g) === -1
    const arr = word.match(/[A-Z]/g)
    const isFirstUpper = arr && arr.length === 1 
          && word.length > 1 && word.indexOf(arr[0]) === 0
    if (isAllUpperCase || isAllLowerCase || isFirstUpper) {
        return true
    }
    return false
};
// @lc code=end


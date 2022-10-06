/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazines = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i]
        const index = magazines.indexOf(char)
        if (index !== -1) {
            magazines.splice(index, 1)
        } else {
            return false
        }
    }
    return true
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let arr = []
    while(columnNumber !== 0) {
        columnNumber --
        arr.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()))
        columnNumber = Math.floor(columnNumber / 26)
    }
    arr.reverse()
    return arr.join('')
};
// @lc code=end


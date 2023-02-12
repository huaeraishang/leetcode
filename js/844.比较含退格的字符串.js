/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const arrS = []
    const arrT = []
    s.split('').forEach(str => {
        if (str === '#') {
            arrS.pop(str)
        } else {
            arrS.push(str)
        }
    })
    t.split('').forEach(str => {
        if (str === '#') {
            arrT.pop(str)
        } else {
            arrT.push(str)
        }
    })
    return arrS.join('') === arrT.join('')
};
// @lc code=end


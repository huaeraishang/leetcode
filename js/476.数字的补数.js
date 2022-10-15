/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bitStr = num.toString(2)
    bitStr = bitStr.split('').map(item => {
        return item === '1' ? '0' : '1'
    }).join('')
    return parseInt(bitStr, 2)
};
// @lc code=end


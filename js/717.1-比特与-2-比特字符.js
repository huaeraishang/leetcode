/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0
    while (i < bits.length - 1) {
        if (bits[i] === 0) {
            i++
        } else if (bits[i] === 1) {
            i += 2
        }
    }
    return i === bits.length - 1
};
// @lc code=end


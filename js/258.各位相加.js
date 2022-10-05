/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        let tempNum = num
        let tempAns = 0
        while (tempNum !== 0) {
            const a = tempNum % 10
            tempAns += a
            tempNum = Math.floor(tempNum / 10)
        }
        num = tempAns
    }
    return num
};
// @lc code=end


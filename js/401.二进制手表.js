/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let ans = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            const hour = i.toString(2).split('0').join('')
            const minute = j.toString(2).split('0').join('')
            if (hour.length + minute.length === turnedOn) {
                ans.push(`${i}:${j < 10 ? '0' : ''}${j}`)
            }
        }
    }
    return ans
};
// @lc code=end


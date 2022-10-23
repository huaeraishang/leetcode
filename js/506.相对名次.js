/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const scoreBak = JSON.parse(JSON.stringify(score))
    score.sort((a, b) => b - a)
    const ans = []
    score.forEach((item, index) => {
        const bakIndex = scoreBak.indexOf(item)
        if (index === 0) {
            ans[bakIndex] = 'Gold Medal'
        } else if (index === 1) {
            ans[bakIndex] = 'Silver Medal'
        } else if (index === 2) {
            ans[bakIndex] = 'Bronze Medal'
        } else {
            ans[bakIndex] = `${index + 1}`
        }
    })
    return ans
};
// @lc code=end


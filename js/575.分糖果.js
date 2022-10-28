/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const count = candyType.length / 2
    const arr = [...new Set(candyType)]
    return Math.min(count, arr.length)
};
// @lc code=end


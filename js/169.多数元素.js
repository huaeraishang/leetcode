/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 0
    let target = null
    nums.forEach((el) => {
        if (count === 0) {
            target = el
        }
        count += (target === el) ? 1 : -1
    })
    return target

};
// @lc code=end


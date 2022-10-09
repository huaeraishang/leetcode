/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => {
        return a - b < 0 ? 1 : -1
    })
    nums = [...new Set(nums)]
    if (nums.length > 2) {
        return nums[2]
    } else {
        return nums[0]
    }
};
// @lc code=end


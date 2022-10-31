/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const len = nums.length
    nums.sort((a, b) => b - a)
    return Math.max(nums[0] * nums[1] * nums[2], 
        nums[0] * nums[len - 2] * nums[len - 1])
};
// @lc code=end


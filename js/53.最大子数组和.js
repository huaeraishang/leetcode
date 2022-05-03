/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0
    let maxRes = nums[0]
    nums.forEach(el => {
        pre = Math.max(pre + el, el)
        maxRes = Math.max(maxRes, pre)
    })

    return maxRes
};
// @lc code=end


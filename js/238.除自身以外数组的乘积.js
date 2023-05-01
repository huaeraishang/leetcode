/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const preSumLeft = []
    preSumLeft[0] = 1
    for (let i = 1; i <= nums.length; i++) {
        preSumLeft[i] = preSumLeft[i - 1] * nums[i - 1]
    }
    const preSumRight = []
    preSumRight[nums.length] = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        preSumRight[i] = preSumRight[i + 1] * nums[i]
    }
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        ans[i] = preSumLeft[i] * preSumRight[i + 1]
    }
    return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
       if (2 * sum + nums[i] === total) {
           return i    
       }
       sum += nums[i]
    }
    return -1
};
var pivotIndex2 = function(nums) {
    const sums = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            sums[i] = nums[i]
        } else {
            sums[i] = sums[i - 1] + nums[i]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const leftSum = sums[i] - nums[i]
        const rightSum = sums[nums.length - 1] - sums[i]
        if (leftSum === rightSum) {
            return i
        }
    }
    return -1
};
// @lc code=end


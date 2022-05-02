/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let value
    for(let i = 0; i <= n; i++) {
        if(!nums.includes(i)) {
            value = i
            break
        }
    }
    return value
};
// @lc code=end


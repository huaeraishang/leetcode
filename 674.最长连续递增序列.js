/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let start = 0
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            start = i
        }
        ans = Math.max(ans, i - start + 1)
    }
    return ans
};
// @lc code=end


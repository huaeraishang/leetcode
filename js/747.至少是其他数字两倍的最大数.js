/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const len = nums.length
    const numsBak = nums.slice(0, len)
    nums.sort((a, b) => a - b)
    if (nums.length === 1) {
        return 0
    } else {
        if (nums[len - 1] / nums[len - 2] >= 2) {
            return numsBak.indexOf(nums[len - 1])
        } else {
            return -1
        }
    }
};
// @lc code=end


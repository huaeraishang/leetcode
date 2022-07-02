/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let ans = nums.length
    while(start <= end) {
        let mid = start + ((end - start) >> 1)
        if (target <= nums[mid]) {
            ans = mid
            end = mid - 1 
        } else if (target > nums[mid]) {
            start = mid + 1
        }
    }
    return ans
};
// @lc code=end


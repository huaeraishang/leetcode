/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (map.has(target - num)) {
            return [map.get(target - num), i]
        }
        map.set(num, i)
    }
    return []
};
// @lc code=end


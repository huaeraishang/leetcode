/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxAns = 0
    let left = 0
    let right = height.length - 1
    // 左右双指针，每次移动数值比较小的那个
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        maxAns = Math.max(maxAns, area)
        if (height[left] < height[right]) {
            left ++
        } else {
            right --
        }
    }
    return maxAns
};
// @lc code=end


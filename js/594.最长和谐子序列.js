/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map()
    let ans = 0
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    map.forEach((value, key) => {
        if (map.has(key + 1)) {
            ans = Math.max(ans, value + map.get(key + 1))
        }
    })
    return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const len = nums.length
    // 当preSum[j] - preSum[i]为k的倍数时，preSum[i]和preSum[j]的余数相同
    // 用map保存余数第一次出现的下标
    const map = new Map()
    const preSum = new Array(len + 1).fill(0)
    // 余数为0的初始坐标为0
    map.set(0, 0)
    for (let i = 1; i <= nums.length; i++) {
        preSum[i] = preSum[i - 1] + nums[i - 1]
    }
    for (let i = 1; i < preSum.length; i++) {
        const item = preSum[i] % k
        if (map.has(item)) {
            const preIndex = map.get(item)
            // 子数组的大小至少为2
            if (i - preIndex >= 2) {
                return true
            }
        } else {
            map.set(item, i)
        }
    }
    return false
};
// @lc code=end


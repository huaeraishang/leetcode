/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let ans = 0
    nums.sort((a, b) => b - a)
    for (let i = 0; i < nums.length; i+=2) {
        const arr = nums.slice(i, i + 2)
        ans += Math.min(arr[0], arr[1])
    }
    return ans
};
// @lc code=end


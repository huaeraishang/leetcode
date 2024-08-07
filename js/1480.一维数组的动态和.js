/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  const sums = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
    sums[i] = nums[i] + sums[i - 1]
  }
  return sums
};
// @lc code=end


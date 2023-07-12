/*
 * @lc app=leetcode.cn id=1911 lang=javascript
 *
 * [1911] 最大子序列交替和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let even = nums[0] // 最后一个元素下标为偶数这种情况
  let odd = 0 // 最后一个元素下标为奇数这种情况
  for (let i = 1; i < nums.length; i++) {
    even = Math.max(even, odd + nums[i])
    odd = Math.max(odd, even - nums[i])
  }
  return even
};
// @lc code=end


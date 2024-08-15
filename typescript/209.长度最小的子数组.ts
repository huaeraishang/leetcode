/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0
  let sum = 0
  let ans = Infinity
  while (right < nums.length) {
    let numR = nums[right]
    sum += numR
    right++
    while (sum >= target) {
      ans = Math.min(ans, right - left)
      let numL = nums[left]
      sum-= numL
      left++
    }
  }
  return ans === Infinity ? 0 : ans
};
// @lc code=end


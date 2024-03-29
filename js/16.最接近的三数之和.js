/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[nums.length - 1] 
  for (let i = 0; i < nums.length; i++) {
    let n1 = nums[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let n2 = nums[left]
      let n3 = nums[right]
      let sum = n1 + n2 + n3
      sum > target ? right -- : left ++
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
    }
  }
  return res
};
// @lc code=end


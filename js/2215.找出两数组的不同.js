/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const set1 = new Set()
  nums1.forEach((num) => {
    if (!nums2.includes(num)) {
      set1.add(num)
    }
  })
  const set2 = new Set()
  nums2.forEach((num) => {
    if (!nums1.includes(num)) {
      set2.add(num)
    }
  })
  return [[...set1], [...set2]]
};
// @lc code=end


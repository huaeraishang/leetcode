/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const ans = []
    nums1.forEach((item) => {
        if (nums2.includes(item)) {
            ans.push(item)
            const index2 = nums2.indexOf(item)
            nums2.splice(index2, 1)
        }
    })
    return ans

};
// @lc code=end


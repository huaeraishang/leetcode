/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    nums1.forEach(num1 => {
        let index = nums2.indexOf(num1)
        while(index < nums2.length) {
            index ++
            const num2 = nums2[index]
            if (num2 > num1) {
                ans.push(num2)
                break
            }
        }
        if (index === nums2.length) {
            ans.push(-1)
        }
    })
    return ans
};
// @lc code=end


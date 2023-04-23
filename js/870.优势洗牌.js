/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
    const ans = []
    const nums2Arr = nums2.map((num, index) => {
        return [index, num]
    })
    nums2Arr.sort((a, b) => a[1] - b[1])
    nums1.sort((a, b) => a - b)
    let left = 0
    let right = nums1.length - 1
    while (nums2Arr.length > 0) {
        const item = nums2Arr.pop()
        const index = item[0]
        const num = item[1]
        if (nums1[right] > num) {
            ans[index] = nums1[right]
            right--
        } else {
            ans[index] = nums1[left]
            left++
        }
    }
    return ans
};
// @lc code=end


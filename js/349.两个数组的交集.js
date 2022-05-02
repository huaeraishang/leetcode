/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const innerInterection = (set1, set2) => {
        let values = new Set()
        set1.forEach(element => {
            if(set2.has(element)) {
                values.add(element)
            }
        })
        return [...values]
    }

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    if(set1.size < set2.size) {
        return innerInterection(set1, set2)
    } else {
        return innerInterection(set2, set1)
    }

};
// @lc code=end


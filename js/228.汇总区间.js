/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let i = 0
    const length = nums.length
    const ans = []
    while (i < length) {
        let low = i
        i++
        while (i < length && nums[i] === nums[i - 1] + 1) {
            i++
        }
        let high = i - 1
        const ranges = [`${nums[low]}`]
        if (low < high) {
            ranges.push(`->${nums[high]}`)
        }
        ans.push(ranges.join(''))
    }
    return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length
    const ans = []
    for (i = 1; i <= n; i++) {
        if (!nums.includes(i)) {
            ans.push(i)
        }
    }
    return ans
};
// @lc code=end


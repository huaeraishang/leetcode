/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const ans = nums.join('').split('0')
    let len = 0
    ans.forEach(item => {
        const itemLength = item.length
        if (itemLength > len) {
            len = itemLength
        }
    })
    return len
};
// @lc code=end


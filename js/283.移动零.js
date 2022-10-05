/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 快慢指针
    let left = 0
    let right = 0
    const length = nums.length
    while (right < length) {
        if (nums[right] !== 0) {
            // 非0的数覆盖是0的
            // left左边的数都非0
            // left和right之间的数都是0
            // 如果left和right一直相等，代表没遇到0，覆盖自身
            nums[left] = nums[right]
            left ++
        }
        right ++
    }
    // 从left开始，到数组末尾，全部覆盖为0
    for (let i = left; i < length; i++) {
        nums[i] = 0
    }
    return nums
};
// @lc code=end


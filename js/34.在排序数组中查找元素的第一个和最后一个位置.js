/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)]
};

const searchLeft = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] === target) {
            right = mid - 1
        }
    }
    if (left === nums.length) {
        return -1
    }
    return nums[left] === target ? left : -1
}

const searchRight = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] === target) {
            left = mid + 1
        }
    }
    if (right < 0) {
        return -1
    }
    return nums[right] === target ? right : -1
}
// @lc code=end


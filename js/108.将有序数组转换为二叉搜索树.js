/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const find = (nums, leftIndex, rightIndex) => {
        if(leftIndex > rightIndex) {
            return null
        }
        const mid = leftIndex + ((rightIndex - leftIndex) >> 1)
        let root = new TreeNode(nums[mid])
        root.left = find(nums, leftIndex, mid - 1)
        root.right = find(nums, mid + 1, rightIndex)
        return root
    }
    return find(nums, 0, nums.length - 1)

};
// @lc code=end


/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let sum = 0
    const getHeight = (node) => {
        if (!node) {
           return 0 
        }
        const leftH = getHeight(node.left)
        const rightH = getHeight(node.right)
        sum = Math.max(sum, leftH + rightH + 1)
        return Math.max(leftH, rightH) + 1
    }
    getHeight(root)
    return sum - 1
};
// @lc code=end


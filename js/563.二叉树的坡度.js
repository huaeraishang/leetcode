/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
    let ans = 0
    function getSum(node) {
        if (!node) {
            return 0
        }
        const sumLeft = getSum(node.left)
        const sumRight = getSum(node.right)
        ans += Math.abs(sumLeft - sumRight)
        return sumLeft + sumRight + node.val
    }
    getSum(root)
    return ans
};
// @lc code=end


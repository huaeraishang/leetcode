/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
    function getSum(node) {
        let ans = 0
        if (node.left) {
            ans += isLeafNode(node.left) ? node.left.val : getSum(node.left)
        }
        if (node.right && !isLeafNode(node.right)) {
            ans += getSum(node.right)
        }
        return ans
    }
    function isLeafNode(node) {
        return !node.left && !node.right
    }
    if (!root) {
        return 0
    }
    return getSum(root)
};
// @lc code=end


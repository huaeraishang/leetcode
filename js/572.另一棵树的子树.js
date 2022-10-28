/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function checkSub(node, subNode) {
        if (!node) {
            return false
        }
        return checkNode(node, subNode) || checkSub(node.left, subNode)
        || checkSub(node.right, subNode)
    }
    function checkNode(node1, node2) {
        if (!node1 && !node2) {
            return true
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false
        }
        const leftSame = checkNode(node1.left, node2.left)
        const rightSame = checkNode(node1.right, node2.right)
        return leftSame && rightSame
    }
    return checkSub(root, subRoot)
};
// @lc code=end


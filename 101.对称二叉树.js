/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function checkTree(p, q) {
        if(!p && !q) {
            return true
        }

        if(!p || !q) {
            return false
        }

        return p.val === q.val && checkTree(p.left, q.right) && checkTree(p.right, q.left)
    }
    return checkTree(root, root)
};
// @lc code=end


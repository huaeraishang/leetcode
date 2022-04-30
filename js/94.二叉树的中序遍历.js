/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let answer = []
    if(!root) {
        return answer
    }
    if(root.left) {
        answer.push(...inorderTraversal(root.left))
    }
    answer.push(root.val)
    if(root.right) {
        answer.push(...inorderTraversal(root.right))
    }
    return answer
};
// @lc code=end


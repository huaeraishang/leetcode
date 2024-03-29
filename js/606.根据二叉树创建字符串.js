/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function(root) {
    let ans = ''
    function dfs(node) {
        if (!node) {
            return
        }
        ans += node.val
        if (node.left || (!node.left && node.right)) {
            ans += '('
            dfs(node.left)
            ans += ')'
        }
        if (node.right) {
            ans += '('
            dfs(node.right)
            ans += ')'
        }
    }
    dfs(root)
    return ans
};
// @lc code=end


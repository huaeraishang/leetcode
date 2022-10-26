/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    let ans = Number.MAX_SAFE_INTEGER
    let pre = -1
    function dfs(node) {
        if (!node) {
           return 
        }
        dfs(node.left)
        if (pre !== -1) {
            ans = Math.min(ans, node.val - pre)
        }
        pre = node.val
        dfs(node.right)
    }
    dfs(root)
    return ans
};
// @lc code=end


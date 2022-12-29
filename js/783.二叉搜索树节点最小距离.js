/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function(root) {
    function dfs(node) {
        if (!node) {
            return
        }
        dfs(node.left)
        if (pre !== -1) {
            // 无需取绝对值，二叉搜索树的性质，中序遍历，节点值由小到大
            // node.val 始终大于 pre
            ans = Math.min(ans, node.val - pre)
        }
        pre = node.val
        dfs(node.right)
    }
    let ans = Number.MAX_SAFE_INTEGER
    let pre = -1
    dfs(root)
    return ans
};
// @lc code=end


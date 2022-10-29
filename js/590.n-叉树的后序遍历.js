/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const ans = []
    function dfs(node) {
        if (!node) {
            return
        }
        node.children.forEach(child => {
            dfs(child)
        });
        ans.push(node.val)
    }
    dfs(root)
    return ans
};
// @lc code=end


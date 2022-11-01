/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const ans = []
    if (!root) {
        return ans
    }
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        const len = queue.length
        const nodes = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            nodes.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        ans.push(nodes)
    }
    return ans
};
// @lc code=end


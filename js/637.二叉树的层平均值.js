/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    const ans = []
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        const len = queue.length
        let sum = 0
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            sum += node.val
            if (node.left) {
                queue.push(node.left)   
            }
            if (node.right) {
                queue.push(node.right)   
            }
        }
        ans.push(sum / len)
    }
    return ans
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root, null)
    }
    let nodes = []
    nodes.push(root)
    // 从下标1开始，因为根节点已加入，到depth-1层止 
    for (let i = 1; i < depth - 1; i++) {
        let temps = []
        nodes.forEach(node => {
            if (node.left) {
                temps.push(node.left)
            }
            if (node.right) {
                temps.push(node.right)
            }
        })
        nodes = temps
    }
    nodes.forEach(node => {
        node.left = new TreeNode(val, node.left, null)
        node.right = new TreeNode(val, null, node.right)
    })
    return root
};
// @lc code=end

